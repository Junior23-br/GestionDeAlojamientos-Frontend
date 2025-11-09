import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-account-guest',
  standalone: false,
  templateUrl: './my-account-guest.html',
  styleUrl: './my-account-guest.scss'
})
export class MyAccountGuest {

  constructor(private router: Router) { }

  goToMyReservations() {
    this.router.navigate(['/my-reservations']).then(r =>"Pagina no accesible, error 404: Not Found Page" );;

  }

  goToMyAccountHost() {
    this.router.navigate(['/my-account-host']).then(r =>"Pagina no accesible, error 404: Not Found Page" );;

  }

  goToMyCalifications() {
    this.router.navigate(['/my-califications']).then(r =>"Pagina no accesible, error 404: Not Found Page" );;

  }

  goToMyPaymenthMethods() {
    this.router.navigate(['/payment-method']).then(r =>"Pagina no accesible, error 404: Not Found Page" );;

  }

  goToMyNotifications() {
    this.router.navigate(['/my-notifications']).then(r =>"Pagina no accesible, error 404: Not Found Page" );;

  }

  goToMyConfig() {
    this.router.navigate(['/configuration-account']).then(r =>"Pagina no accesible, error 404: Not Found Page" );;

  }

  goToMyChats() {
    this.router.navigate(['/my-chats']).then(r =>"Pagina no accesible, error 404: Not Found Page" );;

  }
}
