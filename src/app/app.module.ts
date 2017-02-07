import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { ExtrasPage } from '../pages/extras/extras'
import { MyCart } from '../pages/mycart/mycart';

import { TacoService } from '../services/cart.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    ExtrasPage,
    MyCart
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
    MyCart
  ],
  providers: [TacoService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
