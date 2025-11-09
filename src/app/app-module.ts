import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { MyAccountGuest } from './pages/my-account-guest/my-account-guest';
import { MyAccountHost } from './pages/my-account-host/my-account-host';

@NgModule({
  declarations: [
    App,
    MyAccountGuest,
    MyAccountHost
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
