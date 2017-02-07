import { Component } from '@angular/core';
//import { OrderPage } from '../../pages/order/order';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  orderPage;
  constructor(public navCtrl: NavController) {
   //this.orderPage = OrderPage;
  }
}