import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { DetaillPublication } from './pages/detaill-publication/detaill-publication';
import { BeHost } from './pages/be-host/be-host';
import { RestorePassword } from './pages/restore-password/restore-password';
import { MyAccountGuest } from './pages/my-account-guest/my-account-guest';
import { MyAccountHost } from './pages/my-account-host/my-account-host';
import {NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {BrowserModule, provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {App} from './app';
import {AppRoutingModule} from './app-routing-module';

@NgModule({
  declarations: [
    App,
    DetaillPublication,
    BeHost,
    RestorePassword,
    MyAccountGuest,
    MyAccountHost,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptorsFromDi(), // Para interceptores basados en DI
      withFetch() // Opcional: usar fetch en lugar de XMLHttpRequest
    ),
  ],
  bootstrap: [App]
})
export class AppModule { }
