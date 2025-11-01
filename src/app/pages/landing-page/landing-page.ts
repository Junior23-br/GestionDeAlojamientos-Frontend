import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
  standalone: true
})
export class LandingPage {
  constructor(private router: Router) {
  }
  goToRegister() {
    this.router.navigate(['/register']).then(r =>"Pagina no accesible, error 404: Not Found Page" );
  }

  goToLogin() {
    this.router.navigate(['/login']).then(r => "pagina no accesible, error 404: Not Found Page");
  }
}
