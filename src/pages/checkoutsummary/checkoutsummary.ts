import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { QuesoService } from '../../services/queso.service';
import { TacoService } from '../../services/taco.service';
import { ExtrasService } from '../../services/extras.service';
import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'checkoutSummary',
  templateUrl: 'checkoutsummary.html'
})
export class CheckoutSummary {
  quesos;
  tacos;
  extras;
  discounts;

  constructor(public navCtrl: NavController, public quesoService: QuesoService, public tacoService: TacoService,
              public extrasService: ExtrasService, public alertControl: AlertController) {
    this.quesos = quesoService.getQuesos();
    this.tacos = tacoService.getTacos();
    this.extras = extrasService.getExtras();

    this.setupDiscountFields();
    this.calculateTacoDiscounts();
  }

  setupDiscountFields() {
    this.discounts = 0;
    for(let i = 0; i < this.tacos.length; i++) {
      this.tacos[i]["icon"] = 'ios-add-circle-outline';
      this.tacos[i]["showDetails"] = false;
    }
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
    this.quesoService.removeAllQuesos();
    this.tacoService.removeAllTacos();
    this.extrasService.removeAllExtras();
    let alert = this.alertControl.create({
      title: 'Congratulations!',
      subTitle: "Your food is on its way to becoming reality",
      buttons: ['Close']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
  }

}