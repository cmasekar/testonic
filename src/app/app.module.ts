import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { ExtrasPage } from '../pages/extras/extras'
import { MyCart } from '../pages/mycart/mycart';
import { TacoMade } from '../pages/tacomade/tacomade';
import { CheckoutSummary } from '../pages/checkoutsummary/checkoutsummary';
import { EditTaco } from '../pages/edittaco/edittaco';

import { TacoService } from '../services/cart.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    ExtrasPage,
    MyCart,
    TacoMade,
    CheckoutSummary,
    EditTaco
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    ExtrasPage,
    MyCart,
    TacoMade,
    CheckoutSummary,
    EditTaco
  ],
  providers: [TacoService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
