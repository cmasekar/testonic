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

  checkFor1Queso(quesoName: string): boolean {
    let quesoChecked = "";
    for(let queso of this.quesoChoice) {
      if(quesoChecked == "" && queso.isSelected) {
        quesoChecked = queso.name;
      }
    }
    if(!quesoChecked || quesoChecked == quesoName)
      return false;
    else
      return true;
  }

  addQuesoToCart() {
    let quesoArray = this.quesoChoice.filter(t => t.isSelected);
    if(quesoArray.length == 0) {
      let error = this.alertControl.create({
        title: 'Uh oh!',
        subTitle: "Looks like you didn't select a queso.",
        message: "Select a type of queso please.",
        buttons: ['Close']
      });
      error.present();
      return;
    }
    let selectedQueso = quesoArray[0];
    let queso = new Queso(selectedQueso.name, selectedQueso.cost, selectedQueso.isSharing, selectedQueso.peopleSharing);
    this.quesoService.addQueso(queso);

    let alert = this.alertControl.create({
      title: 'New Queso',
      subTitle: "Queso added to cart",
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