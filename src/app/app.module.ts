import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TacoPage } from '../pages/taco/taco';
import { QuesoPage } from '../pages/queso/queso';
import { ExtrasPage } from '../pages/extras/extras'
import { MyCart } from '../pages/mycart/mycart';
import { CheckoutSummary } from '../pages/checkoutsummary/checkoutsummary';
import { EditTaco } from '../pages/edittaco/edittaco';
import { QuesoLanding } from '../pages/quesolanding/quesolanding';
import { TacoLanding } from '../pages/tacolanding/tacolanding';
import { ExtrasLanding } from '../pages/extraslanding/extraslanding';

import { QuesoService } from '../services/queso.service';
import { TacoService } from '../services/taco.service';
import { ExtrasService } from '../services/extras.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TacoPage,
    QuesoPage,
    ExtrasPage,
    MyCart,
    CheckoutSummary,
    EditTaco,
    QuesoLanding,
    TacoLanding,
    ExtrasLanding
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TacoPage,
    QuesoPage,
    ExtrasPage,
    MyCart,
    CheckoutSummary,
    EditTaco,
    QuesoLanding,
    TacoLanding,
    ExtrasLanding
  ],
  providers: [QuesoService, TacoService, ExtrasService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
