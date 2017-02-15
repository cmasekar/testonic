import { Component } from '@angular/core';
import { AlertController, NavController, ModalController } from 'ionic-angular';
import { MyCart } from '../../pages/mycart/mycart';
import { ExtrasLanding } from '../../pages/extraslanding/extraslanding';

import { Extra } from '../../models/extra';
import { ExtrasService } from '../../services/extras.service';

@Component({
  selector: 'extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {
  extraOptions = [
    {
      name: "Rice",
      cost: 1,
      spicy: 0,
      value: "rice",
      isSelected: false
    },
    {
      name: "Pickled Jalapenos",
      cost: 1,
      spicy: 0,
      value: "pickled-jalapenos",
      isSelected: false
    },
    {
      name: "Sour Cream",
      cost: 1,
      spicy: 0,
      value: "sour-cream",
      isSelected: false
    },
    {
      name: "Black Beans",
      cost: 1.5,
      spicy: 0,
      value: "black-beans",
      isSelected: false
    },
    {
      name: "Traditional Guac",
      cost: 2,
      spicy: 0,
      value: "traditional-guac",
      isSelected: false
    },
    {
      name: "Bacon Refried Beans",
      cost: 1.5,
      spicy: 1,
      value: "bacon-refried-beans",
      isSelected: false
    }
  ];

  costOfExtras = 0;

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

  previewCart() {
    let modal = this.modalCtrl.create(MyCart);
    modal.present();
  }

  addExtrasToCart() {
    let extrasSelected = this.extraOptions.filter(extra => extra.isSelected);
    let groomedExtrasList = extrasSelected.map(function(element) {
      return {
        name: element.name,
        cost: element.cost
      };
    });
    for(let i = 0; i < groomedExtrasList.length; i++) {
      let extra = new Extra(groomedExtrasList[i].name, groomedExtrasList[i].cost);
      this.extrasService.addExtra(extra);
    }
    let alert = this.alertControl.create({
      title: 'New Extras',
      subTitle: "You've added " + groomedExtrasList.length + " item(s) to your cart",
      message: "",
      buttons: ['Close']
    });
    alert.present();
    this.navCtrl.setRoot(ExtrasLanding);
  }

  setQuesoOptions(currentCartExtras: Array<Extra>) {
    for(let i = 0; i < currentCartExtras.length; i++) {
      for(let j = 0; j < this.extraOptions.length; j++) {
        if(currentCartExtras[i].name == this.extraOptions[j].name) {
          this.extraOptions[j].isSelected = true;
        }
      }
    }
  }

  constructor(private alertControl: AlertController, public navCtrl: NavController, 
              public modalCtrl: ModalController, private extrasService: ExtrasService) {
    let currentCartExtras = extrasService.getExtras();
    this.setQuesoOptions(currentCartExtras);
  }
}