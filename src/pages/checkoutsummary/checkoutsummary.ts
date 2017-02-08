import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TacoService } from '../../services/cart.service';


@Component({
  selector: 'checkoutSummary',
  templateUrl: 'checkoutsummary.html'
})
export class CheckoutSummary {
  selectedExtras;
  tacos;

  constructor(public navCtrl: NavController, public params: NavParams, public tacoService: TacoService) {
    this.selectedExtras = params.data.selectedOptions;
    this.tacos = tacoService.getTacos();
    for(let i = 0; i < this.tacos.length; i++) {
      this.tacos[i]["icon"] = 'ios-add-circle-outline';
      this.tacos[i]["showDetails"] = false;
    }
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }

}