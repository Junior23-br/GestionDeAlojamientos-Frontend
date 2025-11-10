import { Component } from '@angular/core';

import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/http/user-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatFormFieldModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  standalone: true
})
export class Register {
  registerForm: FormGroup;
  aceptaPolitica: any;
  nombre = '';
  email = '';
  password = '';
  telefono = '';
  rol = '';
  fechaNacimiento = '';
  aceptaTerminos = false;
  recibeNotificaciones = false;
  tambienAnfitrion = false;

  constructor(private fb: FormBuilder, private userService: AuthService,
  private router:Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    console.log({    nombre: this.nombre,
      email: this.email,
      password: this.password,
      telefono: this.telefono,
      rol: this.rol,
      fechaNacimiento: this.fechaNacimiento,
      aceptaPolitica: this.aceptaPolitica,
      aceptaTerminos: this.aceptaTerminos,
      recibeNotificaciones: this.recibeNotificaciones,
      tambienAnfitrion: this.tambienAnfitrion});

    this.registerForm = this.fb.group({
      nombre: [this.nombre, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required, Validators.minLength(8)]]
    });

    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);

      if(this.rol !== 'GUEST'){
        this.userService.registerHost(
        {
          name: this.nombre,
          phoneNumber: this.telefono,
          birthDate: this.fechaNacimiento,
          email: this.email,
          personalDescription: "",
          password: this.password,  
          role: this.rol,
        }
      ).subscribe({
          next: (response) => {
            console.log('Usuario registrado con éxito:', response);
          },
          error: (error) => {
            console.error('Error al registrar el usuario:', error);
          }
        });
      }else{
        this.userService.registerGuest(
          {    
          name: this.nombre,
          phoneNumber: this.telefono,
          birthDate: this.fechaNacimiento,
          email: this.email,
          password: this.password,
          role: this.rol,
          urlProfilePhoto: null,
        }).subscribe({
            next: (response) => {
              console.log('Usuario registrado con éxito:', response);
            },
            error: (error) => {
              console.error('Error al registrar el usuario:', error);
            }
          });
        alert(`Usuario registrado: ${this.registerForm.value.nombre}`);
        this.registerForm.reset();
      }
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
