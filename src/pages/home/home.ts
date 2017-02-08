import { Component } from '@angular/core';
import { OrderPage } from '../../pages/order/order';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isIOS() {
    return this.plt.is("ios");
  }
  
  goToTaco() {
    this.navCtrl.setRoot(OrderPage)
  }

  constructor(public navCtrl: NavController, public plt: Platform) {
  }
}