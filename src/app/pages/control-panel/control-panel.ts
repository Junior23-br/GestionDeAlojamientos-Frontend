import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-control-panel',
  standalone: false,
  templateUrl: './control-panel.html',
  styleUrl: './control-panel.scss'
})
export class ControlPanel {

  constructor(private router: Router) {
  }
  goToCreateAccomodation() {
    this.router.navigate(['/create-accomodation']).then(r =>"Pagina no accesible, error 404: Not Found Page" );
  }

  goToMyReservations() {
    this.router.navigate(['/my-reservations']).then(r =>"Pagina no accesible, error 404: Not Found Page" );
  }

  goToMyAccomodations() {
    this.router.navigate(['/my-accomodations']).then(r =>"Pagina no accesible, error 404: Not Found Page" );
  }
}
