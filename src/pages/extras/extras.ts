import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'extras',
  templateUrl: 'extras.html'
})
export class ExtrasPage {
  tacoTotal;

extraOptions = 
  [
    {
      name: "Rice",
      cost: 1,
      spicy: 0
    },
    {
      name: "Pickled Jalapenos",
      cost: 1,
      spicy: 0
    },
    {
      name: "Sour Cream",
      cost: 1,
      spicy: 0
    },
    {
      name: "Black Beans",
      cost: 1.5,
      spicy: 0
    },
    {
      name: "Traditional Guac",
      cost: 2,
      spicy: 0
    },
    {
      name: "Bacon Refried Beans",
      cost: 1.5,
      spicy: 1
    }
  ];

  constructor(public navCtrl: NavController) {
      
  }
}