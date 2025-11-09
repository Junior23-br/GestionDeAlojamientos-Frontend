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
import { MyChats } from './pages/my-chats/my-chats';
import { ConfigurationAccount } from './pages/configuration-account/configuration-account';
import { MyReservations } from './pages/my-reservations/my-reservations';
import { PaymentMethod } from './pages/payment-method/payment-method';
import { DetaillReservation } from './pages/detaill-reservation/detaill-reservation';
import { AboutHost } from './pages/about-host/about-host';
import { FilterAccomodation } from './pages/filter-accomodation/filter-accomodation';
import { DashboardHost } from './pages/dashboard-host/dashboard-host';
import { ControlPanel } from './pages/control-panel/control-panel';
import { CreateAccomodation } from './pages/create-accomodation/create-accomodation';
import { MyAccomodations } from './pages/my-accomodations/my-accomodations';
import { MyReputation } from './pages/my-reputation/my-reputation';

@NgModule({
  declarations: [
    App,
    DetaillPublication,
    BeHost,
    RestorePassword,
    MyAccountGuest,
    MyAccountHost,
    MyChats,
    ConfigurationAccount,
    MyReservations,
    PaymentMethod,
    DetaillReservation,
    AboutHost,
    FilterAccomodation,
    DashboardHost,
    ControlPanel,
    CreateAccomodation,
    MyAccomodations,
    MyReputation,
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
