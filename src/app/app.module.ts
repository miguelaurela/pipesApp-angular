import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
//Modulo Personalizado
import { AppRouterModule } from './app-router.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import localeEs from '@angular/common/locales/es-CO'
import {registerLocaleData} from '@angular/common'
registerLocaleData(localeEs)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    PrimeNgModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
