import { Component } from '@angular/core';
import { AlertController, NavController, ModalController } from 'ionic-angular';
import { ExtrasPage } from '../../pages/extras/extras';
import { MyCart } from '../../pages/mycart/mycart';

import { Taco } from '../../models/taco';
import { TacoService } from '../../services/cart.service';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  tortillaChoice = [
    {
      name: "Corn",
      cost: 0,
      info: "Hard (vegetarian, vegan, gluten free)",
      value: "corn",
      displayName: "Corn",
      isSelected: false
    },
    {
      name: "Flour",
      cost: 0,
      info: "Soft (vegitarian, vegan)",
      value: "flour",
      displayName: "Flour",
      isSelected: false
    },
    {
      name: "Goody-Goody (+1)",
      cost: 1,
      info: "Flour soft + guac + sour cream w/ a crunch (vegetarian, contains dairy)",
      value: "goody-goody",
      displayName: "Goody-Goody",
      isSelected: false
    },
    {
      name: "Ju-Ju (+1)",
      cost: 1,
      info: "Flour soft + corn hard + queso + chorizo (contains dairy)",
      value: "ju-ju",
      displayName: "Ju-Ju",
      isSelected: false
    },
    {
      name: "Sweet Lucy (+1)",
      cost: 1,
      info: "Flour soft + corn hard + queso + guac (vegetarian, contains dairy)",
      value: "sweet-lucy",
      displayName: "Sweet Lucy",
      isSelected: false
    },
    {
      name: "Peezler (+1)",
      cost: 1,
      info: "Flour soft + corn hard, refried beans, guac, sour cream (contains dairy)",
      value: "peezler",
      displayName: "Peezler",
      isSelected: false
    },
    {
      name: "Bowl (+1)",
      cost: 1,
      info: "",
      value: "bowl",
      displayName: "Bowl",
      isSelected: false
    },
    {
      name: "Tortilla Fritos ($5)",
      cost: 2,
      info: "Fried, white Mesa chips w/ queso blanco (gluten free)",
      value: "tortilla-fritos",
      displayName: "Tortilla Fritos",
      isSelected: false
    }
  ];
  tfRiceIsChecked = false;
  tfBeansIsChecked = false;

  proteinChoice = [
    {
      name: "House Made Chorizo",
      cost: 0,
      info: "(gluten free)",
      spicy: 0,
      value: "chorizo",
      displayName: "House Made Chorizo",
      isSelected: false
    },
    {
      name: "Braised Beef Brisket",
      cost: 0,
      info: "(gluten free)",
      spicy: 0,
      value: "beef-brisket",
      displayName: "Braised Beef Brisket",
      isSelected: false
    },
    {
      name: "Roasted Pollo",
      cost: 0,
      info: "(gluten free)",
      spicy: 0,
      value: "pollo",
      displayName: "Roasted Pollo",
      isSelected: false
    },
    {
      name: "Pulled Pork",
      cost: 0,
      info: "(gluten free)",
      spicy: 0,
      value: "pulled-pork",
      displayName: "Pulled Pork",
      isSelected: false
    },
    {
      name: "Shrimp Ceviche",
      cost: 0,
      info: "(gluten free)",
      spicy: 0,
      value: "shrimp-ceviche",
      displayName: "Shrimp Ceviche",
      isSelected: false
    },
    {
      name: "Thai Chili Tofu",
      cost: 0,
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "thai-chili-tofu",
      displayName: "Thai Chili Tofu",
      isSelected: false
    },
    {
      name: "Roasted Portobellos",
      cost: 0,
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "portobellos",
      displayName: "Roasted Portobellos",
      isSelected: false
    },
    {
      name: "BBQ Pulled Jackfruit",
      cost: 0,
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "jackfruit",
      displayName: "BBQ Pulled Jackfruit",
      isSelected: false
    },
    {
      name: "Ghost Pepper Marinated Steak ($5)",
      cost: 2,
      info: "(gluten free)",
      spicy: 0,
      value: "steak",
      displayName: "Ghost Pepper Marinated Steak",
      isSelected: false
    },
    {
      name: "Special Protein of the Month ($5)",
      cost: 2,
      info: "(ask you server!)",
      spicy: 0,
      value: "special",
      displayName: "Special Protein of the Month",
      isSelected: false
    }
  ];

  toppingChoice = [
    {
      name: "Lettuce",
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "lettuce",
      isSelected: false
    },
    {
      name: "Red Cabbage",
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "red-cabbage",
      isSelected: false
    },{
      name: "Jicama + Cabbage Slaw",
      info: "(vegetarian, vegan, gluten free)",
      spicy: 1,
      value: "jicama",
      isSelected: false
    },
    {
      name: "Cilantro + Onions",
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "cilantro-onions",
      isSelected: false
    },
    {
      name: "Tomatoes",
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "tomatoes",
      isSelected: false
    },
    {
      name: "Pickled Red Onions",
      info: "(vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "red-onions",
      isSelected: false
    }
  ];

  cheeseChoice = [
    {
      name: "Queso Fresco",
      info: "Soft, moist, & mild in flavor (vegetarian, contains dairy, gluten free)",
      spicy: 0,
      value: "fresco",
      isSelected: false
    },
    {
      name: "Middlefield Smoked Cheddar",
      info: "(vegetarian, contains dairy, gluten free)",
      spicy: 0,
      value: "cheddar",
      isSelected: false
    },
    {
      name: "Chihuahua",
      info: "Mild, white cheese (vegetarian, contains dairy, gluten free)",
      spicy: 0,
      value: "chihuahua",
      isSelected: false
    }
  ];

  salsaChoice = [
    {
      name: "Pineapple Salsa w/ Tomatoes, Peppers, and Onions",
      info: "Sweet & mild (vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "pineapple-salsa",
      isSelected: false
    },
    {
      name: "Corn Salsa w/ Tomatoes, Peppers, and Onions",
      info: "Mild (vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "corn-salsa",
      isSelected: false
    },
    {
      name: "Salsa Verde",
      info: "Medium (vegetarian, vegan, gluten free)",
      spicy: 1,
      value: "salsa-verde",
      isSelected: false
    },
    {
      name: "Salsa Roja",
      info: "Salsa de la casa | caliente (vegetarian, vegan, gluten free)",
      spicy: 1,
      value: "salsa-roja",
      isSelected: false
    }
  ];

  sauceChoice = [
    {
      name: "Chipotle Crema",
      info: "Chipotles in adobo w/ crema | hot (vegetarian, contains dairy)",
      spicy: 1,
      value: "chipotle-crema",
      isSelected: false
    },
    {
      name: "Chipotle Honey",
      info: "Chipotles + honey, sweet + spicy (vegetarian, gluten free)",
      spicy: 2,
      value: "chipotle-honey",
      isSelected: false
    },
    {
      name: "Mexican Chimichurri",
      info: "Mild + Garlicy (vegetarian, vegan, gluten free)",
      spicy: 0,
      value: "chimichurri",
      isSelected: false
    },
    {
      name: "Cilantro/Lime Aioli",
      info: "Mild + creamy (gluten free)",
      spicy: 0,
      value: "cilantro-lime-aioli",
      isSelected: false
    },
    {
      name: "Habanero/Mango BBQ",
      info: "Mucho caliente + sweet (vegetarian, gluten free)",
      spicy: 2,
      value: "habanero-mango-bbq",
      isSelected: false
    },
    {
      name: "Condado Secret Taco Sauce",
      info: "Mucho caliente (vegetarian, vegan, gluten free)",
      spicy: 3,
      value: "condado-secret-sauce",
      isSelected: false
    },
    {
      name: "Ghost Pepper",
      info: "INFERNO WARNING | HOT (vegetarian, vegan, gluten free)",
      spicy: 5,
      value: "ghost-pepper",
      isSelected: false
    }
  ];
  
  costOfOneTaco = 3;
  numberOfTacos = 1;

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

  goToTacoSummary() {
    this.navCtrl.push(ExtrasPage);
  }

  previewCart() {
    let tacos = this.tacoService.getTacos();
    let modal = this.modalCtrl.create(MyCart, tacos);
    modal.present();
  }

  changeTacoNumber(change: number) {
    if(this.numberOfTacos != 1 || change >= 0) {
      this.numberOfTacos += change;
    }
  }

  checkFor1Tortilla(tortillaValue: string) {
    let tortillaChecked = "";
    for(let tortilla of this.tortillaChoice) {
      if(tortillaChecked == "" && tortilla.isSelected) {
        tortillaChecked = tortilla.value;
      }
    }
    if(!tortillaChecked || tortillaChecked == tortillaValue)
      return false;
    else
      return true;
  }

  checkFor2Protein(proteinValue: string) {
    let numberChecked = 0;
    let meatsChecked = [];
    for(let meat of this.proteinChoice) {
      if(numberChecked < 2 && meat.isSelected) {
        numberChecked++;
        meatsChecked.push(meat.value);
      }
    }
    if(numberChecked < 2) {
      return false;
    }
    else {
      for(let checkedMeat of meatsChecked) {
        if(checkedMeat == proteinValue)
          return false;
      }
      return true;
    }
  }

  recalculate() {
    this.costOfOneTaco = 3 + this.calculateTortillaCost() + this.calculateProteinCost();
  }

  calculateTortillaCost() {
    let cost = 0;
    let selectedTortillaList = this.tortillaChoice.filter(tortilla => tortilla.isSelected);
    if(selectedTortillaList.length) {
      let selectedTortilla = selectedTortillaList[0];
      cost = selectedTortilla.cost;
      if(selectedTortilla.value == "tortilla-fritos") {
        if(this.tfRiceIsChecked)
          cost += 1;
        if(this.tfBeansIsChecked)
          cost += 1;
      }
    }
    return cost;
  }

  calculateProteinCost() {
    let cost = 0;
    let selectedProteins = this.proteinChoice.filter(meat => meat.isSelected);
    switch(selectedProteins.length) {
      case 1:
        cost = selectedProteins[0].cost;
        break;
      case 2:
        let costOfMeats = [selectedProteins[0].cost, selectedProteins[1].cost];
        cost = Math.max(...costOfMeats) + 2;
        break;
      default:
        break;
    }
    return cost;
  }

  addTacoToCart() {
    let tortillaArray = this.tortillaChoice.filter(t => t.isSelected);
    if(tortillaArray.length == 0) {
      let error = this.alertControl.create({
        title: 'Uh oh!',
        subTitle: "Looks like you didn't select a tortilla.",
        message: "Select a tortilla type at the top of the page.",
        buttons: ['Close']
      });
      error.present();
      return;
    }
    let tortillaName = tortillaArray[0].displayName;
    let tortillaOptions = {
      rice: this.tfRiceIsChecked,
      beans: this.tfBeansIsChecked
    };
    let proteinsSelected = this.proteinChoice.filter(p => p.isSelected);
    if(proteinsSelected.length == 0) {
        let error = this.alertControl.create({
          title: 'Hmmm',
          subTitle: "We think it's an accident, but you didn't choose a protein.",
          message: "Scroll up to select at least one of the protein options.",
          buttons: ['Close']
        });
        error.present();
        return;
      }
    let selectedProteinsNames = proteinsSelected.map(function(element) {
      return element.displayName ? element.displayName : "";
    });
    let toppingsSelected = this.toppingChoice.filter(topping => topping.isSelected);
    let selectedToppingsNames = toppingsSelected.map(function(element) {
      return element.name ? element.name : "";
    });
    let cheeseSelected = this.cheeseChoice.filter(cheese => cheese.isSelected);
    let selectedCheeseNames = cheeseSelected.map(function(element) {
      return element.name ? element.name : "";
    });
    let salsaSelected = this.salsaChoice.filter(salsa => salsa.isSelected);
    let selectedSalsaNames = salsaSelected.map(function(element) {
      return element.name ? element.name : "";
    });
    let sauceSelected = this.sauceChoice.filter(sauce => sauce.isSelected);
    let selectedSauceNames = sauceSelected.map(function(element) {
      return element.name ? element.name : "";
    });
    let taco = new Taco(tortillaName, tortillaOptions, selectedProteinsNames,
                        selectedToppingsNames, selectedCheeseNames, selectedSalsaNames,
                        selectedSauceNames, this.numberOfTacos, this.costOfOneTaco);
    let response = this.tacoService.addTaco(taco);
    let alert = this.alertControl.create({
      title: 'New Taco',
      subTitle: response,
      message: "",
      buttons: ['Close']
    });
    alert.present();
  }

  constructor(private alertControl: AlertController, public navCtrl: NavController, 
              public modalCtrl: ModalController, private tacoService: TacoService) {

  }
}