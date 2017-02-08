import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TacoService } from '../../services/cart.service';
import { CheckoutSummary } from '../../pages/checkoutsummary/checkoutsummary';
import { MyCart } from '../../pages/mycart/mycart';
import { TacoMade } from '../../pages/tacomade/tacomade';

@Component({
  selector: 'extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {

  extraOptions = [
    {
      name: "Rice (+1)",
      cost: 1,
      spicy: 0,
      value: "rice",
      displayName: "Rice",
      isSelected: false
    },
    {
      name: "Pickled Jalapenos (+1)",
      cost: 1,
      spicy: 0,
      value: "pickled-jalapenos",
      displayName: "Pickled Jalapenos",
      isSelected: false
    },
    {
      name: "Sour Cream (+1)",
      cost: 1,
      spicy: 0,
      value: "sour-cream",
      displayName: "Sour Cream",
      isSelected: false
    },
    {
      name: "Black Beans (+1.5)",
      cost: 1.5,
      spicy: 0,
      value: "black-beans",
      displayName: "Black Beans",
      isSelected: false
    },
    {
      name: "Traditional Guac (+2)",
      cost: 2,
      spicy: 0,
      value: "traditional-guac",
      displayName: "Traditional Guac",
      isSelected: false
    },
    {
      name: "Bacon Refried Beans (+1.5)",
      cost: 1.5,
      spicy: 1,
      value: "bacon-refried-beans",
      displayName: "Bacon Refried Beans",
      isSelected: false
    }
  ];

  setFlameColor(level: number) {
    switch (level) {
      case 1:
        return "spicy-1";
      case 2:
        return "spicy-2";
      case 3:
        return "spicy-3";
      case 4:
        return "spicy-4";
      case 5:
        return "spicy-5";
      default:
        return "black";
    }
  }

  goToCheckout() {
    let selectedOptions = this.extraOptions.filter(o => o.isSelected);
    this.navCtrl.push(CheckoutSummary, {selectedOptions: selectedOptions})
  }

  previewCart() {
    let modal = this.modalCtrl.create(MyCart, this.tacoService.getTacos());
    modal.onDidDismiss(shouldGo => {
            if(shouldGo) {
                this.navCtrl.setRoot(TacoMade);
                this.navCtrl.push(ExtrasPage);
            }
        })
    modal.present();
  }
  constructor(public navCtrl: NavController, public tacoService: TacoService, private modalCtrl: ModalController) {
      
  }
}