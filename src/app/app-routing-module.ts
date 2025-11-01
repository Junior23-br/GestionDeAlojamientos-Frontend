import {RouterModule, Routes} from '@angular/router';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import {LandingPage} from './pages/landing-page/landing-page';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'landing-page', component: LandingPage },
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
