import { Component } from '@angular/core';
import { AuthService } from '../../core/http/user-service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    MatInputModule,
    MatButtonModule,
    CommonModule,
    MatFormFieldModule, FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true
})
export class Login {

  email = '';
  password = '';

  constructor(private userService: AuthService) {}

  onSubmit() {
    this.userService.loginGuest({
    email: this.email, 
    password: this.password}).subscribe({
      next: (response) => {
        console.log('Usuario logueado con éxito:', response);
      },
      error: (error) => {
        console.error('Error al loguear el usuario:', error);
      }
    });
  }
}
