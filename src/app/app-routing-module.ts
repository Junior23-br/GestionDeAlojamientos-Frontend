import {RouterModule, Routes} from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import {LandingPage} from './pages/landing-page/landing-page';
import {DetaillPublication} from './pages/detaill-publication/detaill-publication';
import {BeHost} from './pages/be-host/be-host';
import {RestorePassword} from './pages/restore-password/restore-password';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'landing-page', component: LandingPage },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'be-host', component: BeHost },
  { path: 'detaill-publication', component: DetaillPublication },
  {path: 'restore-password', component: RestorePassword},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
