import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TacoService } from '../../services/cart.service';
import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'checkoutSummary',
  templateUrl: 'checkoutsummary.html'
})
export class CheckoutSummary {
  selectedExtras;
  costOfExtras;
  discounts;
  tacos;

  constructor(public navCtrl: NavController, public params: NavParams, public tacoService: TacoService,
              public alertControl: AlertController) {
    this.selectedExtras = params.data.selectedOptions;
    this.tacos = tacoService.getTacos();
    this.discounts = 0;
    for(let i = 0; i < this.tacos.length; i++) {
      this.tacos[i]["icon"] = 'ios-add-circle-outline';
      this.tacos[i]["showDetails"] = false;
    }
    this.costOfExtras = 0;
    for(let i = 0; i < this.selectedExtras.length; i++) {
      this.costOfExtras += this.selectedExtras[i].cost;
    }
    this.calculateTacoDiscounts();
  }

  calculateTacoDiscounts() {
    var currentTime = new Date();
    if(currentTime.getDay() > 0 && currentTime.getHours() >= 16 && currentTime.getHours() <= 19) {
      for(let i = 0; i < this.tacos.length; i++) {
        let currentTacoDiscount = this.tacos[i].quantity;
        this.discounts += currentTacoDiscount;
        this.tacos[i]["discount"] = {
          description: "Happy Hour",
          amount: currentTacoDiscount
        };
      }
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

  goToFinish() {
    let alert = this.alertControl.create({
      title: 'Congratulations!',
      subTitle: "Your tacos are on their way to becoming reality",
      buttons: ['Close']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
  }

}