import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  registerGuest(obj: Object): Observable<any> {
    return this.http.post(this.apiUrl+'/guest/signup', obj);
  }

  loginGuest(obj: Object): Observable<any> {
    return this.http.post(this.apiUrl+'/guest/login', obj);
  }
  registerHost(obj: Object): Observable<any> {
    return this.http.post(this.apiUrl+'/host/signup', obj);
  }

  loginHost(obj: Object): Observable<any> {
    return this.http.post(this.apiUrl+'/host/login', obj);
  }
}
