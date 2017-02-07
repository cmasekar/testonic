import { Component } from '@angular/core';
import { OrderPage } from '../../pages/order/order';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orderPage;
  isIOS() {
    return this.plt.is("ios");
  }
  constructor(public navCtrl: NavController, public plt: Platform) {
   this.orderPage = OrderPage;
  }
}