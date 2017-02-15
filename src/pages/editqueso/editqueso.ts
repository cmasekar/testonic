import { Component } from '@angular/core';
import { ViewController, NavParams, NavController, AlertController, Platform } from 'ionic-angular';

import { Queso } from '../../models/queso';
import { QuesoService } from '../../services/queso.service';

@Component({
  selector: 'editqueso',
  templateUrl: 'editqueso.html'
})
export class EditQueso {
  currentQueso;
  quesoIndex;
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
  
  changePeopleNumber(index: number, change: number) {
    if(this.quesoChoice[index].peopleSharing != 1 || change >= 0) {
      this.quesoChoice[index].peopleSharing += change;
    }
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

  setQuesoOptions() {
    for(let i = 0; i < this.quesoChoice.length; i++) {
        if(this.quesoChoice[i].name == this.currentQueso.name) {
            this.quesoChoice[i].isSelected = true;
            this.quesoChoice[i].isSharing = this.currentQueso.isSharing;
            this.quesoChoice[i].peopleSharing = this.currentQueso.peopleSharing;
        }
    }
  }

  submitEdit() {
    let quesosSelected = this.quesoChoice.filter(queso => queso.isSelected);
    let groomedQuesoList = quesosSelected.map(function(element) {
      return {
        name: element.name,
        cost: element.cost,
        isSharing: element.isSharing,
        peopleSharing: element.peopleSharing
      };
    });
    this.currentQueso = new Queso(groomedQuesoList[0].name, groomedQuesoList[0].cost, groomedQuesoList[0].isSharing, groomedQuesoList[0].peopleSharing);
    this.quesoService.updateQueso(this.currentQueso, this.quesoIndex);
  }

  ionViewWillLeave() {
    this.submitEdit();
  }

  isIOS() {
    return this.plt.is("ios");
  }
    
  constructor(params: NavParams, public viewCtrl: ViewController, private quesoService: QuesoService,
              public navCtrl: NavController, public alertControl: AlertController, public plt: Platform) {
      this.quesoIndex = params.data.index;
      this.currentQueso = quesoService.getQueso(this.quesoIndex);
      this.setQuesoOptions();
  }
}