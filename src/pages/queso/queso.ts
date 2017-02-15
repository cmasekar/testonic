import { Component } from '@angular/core';
import { AlertController, NavController, ModalController } from 'ionic-angular';
import { MyCart } from '../../pages/mycart/mycart';
import { QuesoLanding } from '../../pages/quesolanding/quesolanding';

import { Queso } from '../../models/queso';
import { QuesoService } from '../../services/queso.service';

@Component({
  selector: 'queso',
  templateUrl: 'queso.html'
})
export class QuesoPage {
  quesoChoice = [
    {
      name: "Blanco",
      info: "",
      spicy: 0,
      cost: 6,
      isSharing: false,
      peopleSharing: 1,
      isSelected: false
    },
    {
      name: "Elote",
      info: "Corn, spices",
      spicy: 0,
      cost: 6,
      isSharing: false,
      peopleSharing: 1,
      isSelected: false
    },
    {
      name: "Chorizo",
      info: "",
      spicy: 0,
      cost: 8,
      isSharing: false,
      peopleSharing: 1,
      isSelected: false
    },
    {
      name: "Black bean",
      info: "",
      spicy: 0,
      cost: 6,
      isSharing: false,
      peopleSharing: 1,
      isSelected: false
    },
    {
      name: "Diablo",
      info: "Jalapenos, habanero, onion",
      spicy: 0,
      cost: 7,
      isSharing: false,
      peopleSharing: 1,
      isSelected: false
    },
    {
      name: "Dirty queso",
      info: "Chicken, black beans, onions, dirty sauce",
      spicy: 0,
      cost: 8,
      isSharing: false,
      peopleSharing: 1,
      isSelected: false
    }
  ];

  previewCart() {
    let modal = this.modalCtrl.create(MyCart);
    modal.present();
  }

  addQuesoToCart() {
    let quesosSelected = this.quesoChoice.filter(queso => queso.isSelected);
    let groomedQuesoList = quesosSelected.map(function(element) {
      return {
        name: element.name,
        cost: element.cost,
        isSharing: element.isSharing,
        peopleSharing: element.peopleSharing
      };
    });
    for(let i = 0; i < groomedQuesoList.length; i++) {
      let queso = new Queso(groomedQuesoList[i].name, groomedQuesoList[i].cost, groomedQuesoList[i].isSharing, groomedQuesoList[i].peopleSharing);
      this.quesoService.addQueso(queso);
    }
    let alert = this.alertControl.create({
      title: 'New Queso',
      subTitle: "You've added " + groomedQuesoList.length + " item(s) to your cart",
      message: "",
      buttons: ['Close']
    });
    alert.present();
    this.navCtrl.setRoot(QuesoLanding);
  }

  changePeopleNumber(index: number, change: number) {
    if(this.quesoChoice[index].peopleSharing != 1 || change >= 0) {
      this.quesoChoice[index].peopleSharing += change;
    }
  }

  constructor(private alertControl: AlertController, public navCtrl: NavController, 
              public modalCtrl: ModalController, private quesoService: QuesoService) {
  }
}