import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-landing-page',
  imports: [
    MatButton,
    RouterLink
  ],
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

  goToDetaillPublication() {
    this.router.navigate(['/detaill-publication']).then(r =>"pagina no accesible, error 404: Not Found Page" );
  }

  goToFilterAccomodation() {
    this.router.navigate(['/filter-accomodation']).then(r =>"pagina no accesible, error 404: Not Found Page" );
  }
}
