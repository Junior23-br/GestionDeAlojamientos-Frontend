import {RouterModule, Routes} from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import {LandingPage} from './pages/landing-page/landing-page';
import {DetaillPublication} from './pages/detaill-publication/detaill-publication';
import {BeHost} from './pages/be-host/be-host';
import {RestorePassword} from './pages/restore-password/restore-password';
import {FilterAccomodation} from './pages/filter-accomodation/filter-accomodation';
import {MyAccountHost} from './pages/my-account-host/my-account-host';
import {MyReputation} from './pages/my-reputation/my-reputation';
import {MyAccountGuest} from './pages/my-account-guest/my-account-guest';
import {MyReservations}  from './pages/my-reservations/my-reservations';
import {ConfigurationAccount} from './pages/configuration-account/configuration-account';
import {MyChats} from './pages/my-chats/my-chats';
import {PaymentMethod} from './pages/payment-method/payment-method';
import {NgModule} from '@angular/core';
import { CreateAccomodation } from './pages/create-accomodation/create-accomodation';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'landing-page', component: LandingPage },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'be-host', component: BeHost },
  { path: 'detaill-publication', component: DetaillPublication },
  {path: 'restore-password', component: RestorePassword},
  {path: 'filter-accomodation', component: FilterAccomodation},
  {path: 'my-account-host', component: MyAccountHost},
  {path: 'my-reputation', component: MyReputation},
  {path: 'my-account-guest', component: MyAccountGuest},
  {path: 'my-reservations', component: MyReservations},
  {path: 'my-chats', component: MyChats},
  {path: 'payment-method', component: PaymentMethod},
  {path: 'configuration-account', component: ConfigurationAccount},
  {path: 'create-accommodation', component: CreateAccomodation}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
