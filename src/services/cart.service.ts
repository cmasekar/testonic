import { Injectable } from '@angular/core';

import { Taco } from '../models/taco';


@Injectable()
export class TacoService {
  TACOS: Taco[] = [];
  getCartCost(): number {
    let total = 0;
    for(let taco of this.TACOS) {
      total += taco.cost * taco.quantity;
    }
    return total;
  }
  getTacos(): Taco[] {
    return this.TACOS;
  }
  addTaco(newTaco: Taco): string {
    this.TACOS.push(newTaco);
    return "Taco added to cart";
  }
  removeTaco(index: number): string {
    if(index < this.TACOS.length) {
      this.TACOS.splice(index, 1);
      return "Taco successfully removed.";
    }
    return "There was an error removing that taco.";
  }
  getTaco(index: number): Taco {
    return this.TACOS[index];
  }
  updateTaco(newTaco: Taco, index: number) {
    this.TACOS[index] = newTaco;
  }
  removeAllTacos() {
    this.TACOS = [];
  }
}