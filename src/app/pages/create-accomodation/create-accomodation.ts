import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface UbicationCreateDTO {
  country: string;
  state: string;
  city: string;
  address: string;
}

interface AccommodationCreateDTO {
  title: string;
  accommodationType: string;
  houseRules?: string | null;
  ubication: UbicationCreateDTO;
  maxGuestCapacity: number;
  numberOfBeds: number;
  numberOfBathrooms: number;
  hostId: number;       // backend recibe Long, desde FE enviamos number
  urlPhotos: string[];  // URLs (no archivos)
  serviceIds: number[]; // IDs de servicios
}

@Component({
  selector: 'app-create-accomodation',
  standalone: false,
  templateUrl: './create-accomodation.html',
  styleUrls: ['./create-accomodation.scss'] // <--- importante: plural
})
export class CreateAccomodation implements OnInit {

  form!: FormGroup;
  urlInput = new FormControl<string>('', [Validators.required, Validators.pattern(/^https?:\/\/.+/i)]);
  loading = false;
  status: 'idle' | 'ok' | 'error' = 'idle';

  // Puedes cargar este catálogo desde tu backend; aquí dejo uno base.
  serviciosCatalogo: Array<{ id: number; name: string }> = [
    { id: 1, name: 'Wifi' },
    { id: 2, name: 'Televisión' },
    { id: 3, name: 'Cocina' },
    { id: 4, name: 'Lavadora' },
    { id: 5, name: 'Parqueadero' },
    { id: 6, name: 'Aire acondicionado' },
    { id: 7, name: 'Piscina' },
    { id: 8, name: 'Apto mascotas' }
  ];

  // Defaults para reset
  defaults = {
    title: '',
    accommodationType: '',
    houseRules: '',
    ubication: { country: '', state: '', city: '', address: '' },
    maxGuestCapacity: 1,
    numberOfBeds: 1,
    numberOfBathrooms: 1,
    hostId: null as unknown as number,
    urlPhotos: [] as string[],
    serviceIds: [] as number[]
  };

  // File input + previews
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imageFiles: File[] = [];
  imagePreviews: string[] = [];

  // Base URL y endpoint
  private readonly baseUrl = (environment as any).apiUrl ?? 'http://localhost:8080/';
  private readonly endpoint = this.baseUrl.replace(/\/?$/, '/') + 'accommodations/new';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      accommodationType: ['', [Validators.required, Validators.maxLength(60)]],
      houseRules: [''],
      ubication: this.fb.group({
        country: ['', [Validators.required, Validators.maxLength(80)]],
        state: ['', [Validators.required, Validators.maxLength(80)]],
        city: ['', [Validators.required, Validators.maxLength(80)]],
        address: ['', [Validators.required, Validators.maxLength(200)]],
      }),
      maxGuestCapacity: [1, [Validators.required, Validators.min(1)]],
      numberOfBeds: [1, [Validators.required, Validators.min(0)]],
      numberOfBathrooms: [1, [Validators.required, Validators.min(0)]],
      hostId: [null, [Validators.required, Validators.min(1)]],
      urlPhotos: this.fb.array<string>([]),
      serviceIds: this.fb.array<number>([])
    });
  }

  // --- getters de conveniencia ---
  get urlPhotos(): FormArray<FormControl<string>> {
    return this.form.get('urlPhotos') as FormArray<FormControl<string>>;
  }
  get serviceIds(): FormArray<FormControl<number>> {
    return this.form.get('serviceIds') as FormArray<FormControl<number>>;
  }

  // Helpers para IntelliJ (evitan warning del setter privado)
  private ctrlTouched(c: any): boolean { return !!c && !!c['touched']; }
  private ctrlDirty(c: any): boolean   { return !!c && !!c['dirty']; }

  // --- validación UI ---
  hasError(controlName: string): boolean {
    const c = this.form.get(controlName);
    return !!c && c.invalid && (this.ctrlTouched(c) || this.ctrlDirty(c));
  }

  errorMsg(controlName: string): string {
    const c = this.form.get(controlName);
    if (!c || !(this.ctrlTouched(c) || this.ctrlDirty(c))) return '';

    const e = c.errors ?? {};
    if (e['required'])   return 'Requerido';
    if (e['email'])      return 'Email inválido';
    if (e['min'])        return `Valor mínimo ${e['min'].min}`;
    if (e['max'])        return `Valor máximo ${e['max'].max}`;
    if (e['minlength'])  return `Mínimo ${e['minlength'].requiredLength} caracteres`;
    if (e['maxlength'])  return `Máximo ${e['maxlength'].requiredLength} caracteres`;
    return 'Campo inválido';
  }

  // --- para controles anidados (ubication) ---
  hasGroupError(group: 'ubication', control: keyof UbicationCreateDTO): boolean {
    const g = this.form.get(group) as FormGroup | null;
    const c: AbstractControl | null = g ? g.get(control as string) : null;
    return !!c && c.invalid && (this.ctrlTouched(c) || this.ctrlDirty(c));
  }

  errorMsgGroup(group: 'ubication', control: keyof UbicationCreateDTO): string {
    const g = this.form.get(group) as FormGroup | null;
    const c: AbstractControl | null = g ? g.get(control as string) : null;
    if (!c || !(this.ctrlTouched(c) || this.ctrlDirty(c))) return '';

    const e = c.errors ?? {};
    if (e['required'])   return 'Requerido';
    if (e['maxlength'])  return `Máximo ${e['maxlength'].requiredLength ?? ''} caracteres`;
    return 'Campo inválido';
  }

  // --- fotos (URLs) ---
  addUrlPhoto(): void {
    if (this.urlInput.invalid) return;
    this.urlPhotos.push(new FormControl(this.urlInput.value!.trim(), { nonNullable: true }));
    this.urlInput.reset('');
  }
  removeUrlPhoto(index: number): void {
    this.urlPhotos.removeAt(index);
  }

  // --- servicios ---
  toggleService(id: number, ev: Event): void {
    const input = ev.target as HTMLInputElement;
    const current = this.serviceIds.value as number[];
    if (input.checked) {
      if (!current.includes(id)) this.serviceIds.push(new FormControl<number>(id, { nonNullable: true }));
    } else {
      const idx = this.serviceIds.controls.findIndex(c => c.value === id);
      if (idx > -1) this.serviceIds.removeAt(idx);
    }
  }

  // === Archivos ===
  openFileDialog(): void {
    this.fileInput?.nativeElement?.click();
  }

  onFilesSelected(ev: Event): void {
    const input = ev.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    for (const file of Array.from(input.files)) {
      this.imageFiles.push(file);
      const reader = new FileReader();
      reader.onload = () => this.imagePreviews.push(reader.result as string);
      reader.readAsDataURL(file);
    }
    input.value = '';
  }

  removeImage(index: number): void {
    this.imageFiles.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }

  // Sube archivos y devuelve URLs (ajusta al upload real que tengas)
  private async uploadImages(): Promise<string[]> {
    if (this.imageFiles.length === 0) return [];

    const fd = new FormData();
    this.imageFiles.forEach((f, i) => fd.append('files', f, f.name || `photo_${i + 1}.jpg`));

    let headers = new HttpHeaders(); // NO seteamos Content-Type para dejar el boundary
    const token = localStorage.getItem('token');
    if (token) headers = headers.set('Authorization', `Bearer ${token}`);

    try {
      // Cambia la URL por la de tu servicio de uploads
      const resp = await this.http.post<{ urls: string[] }>(
        this.baseUrl.replace(/\/?$/, '/') + 'files/upload',
        fd,
        { headers }
      ).toPromise();

      return resp?.urls ?? [];
    } catch (e) {
      console.error('Fallo subiendo imágenes', e);
      return [];
    }
  }

  // --- submit ---
  private buildDto(): AccommodationCreateDTO {
    const v = this.form.value;
    return {
      title: v.title!,
      accommodationType: v.accommodationType!,
      houseRules: v.houseRules?.trim() || null,
      ubication: {
        country: v.ubication!.country!,
        state: v.ubication!.state!,
        city: v.ubication!.city!,
        address: v.ubication!.address!
      },
      maxGuestCapacity: Number(v.maxGuestCapacity),
      numberOfBeds: Number(v.numberOfBeds),
      numberOfBathrooms: Number(v.numberOfBathrooms),
      hostId: Number(v.hostId),
      urlPhotos: (v.urlPhotos ?? []) as string[],
      serviceIds: (v.serviceIds ?? []) as number[]
    };
  }

  async onSubmit(): Promise<void> {
    this.status = 'idle';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    try {
      const dto = this.buildDto();

      // 1) Subir imágenes seleccionadas (si hay)
      const uploadedUrls = await this.uploadImages();

      // 2) Mezclar con las URLs que el usuario escribió en el FormArray (urlPhotos)
      dto.urlPhotos = [...(dto.urlPhotos ?? []), ...uploadedUrls];

      // 3) Enviar DTO final al endpoint de crear alojamiento
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const token = localStorage.getItem('token');
      if (token) headers = headers.set('Authorization', `Bearer ${token}`);

      await this.http.post(this.endpoint, dto, { headers }).toPromise();

      this.status = 'ok';
      this.form.reset(this.defaults);

      // limpiar arrays del form
      while (this.urlPhotos.length) this.urlPhotos.removeAt(0);
      while (this.serviceIds.length) this.serviceIds.removeAt(0);

      // limpiar archivos y previews
      this.imageFiles = [];
      this.imagePreviews = [];
    } catch (err) {
      console.error('Error creando alojamiento', err as HttpErrorResponse);
      this.status = 'error';
    } finally {
      this.loading = false;
    }
  }
}
