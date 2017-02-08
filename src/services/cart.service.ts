import { Injectable } from '@angular/core';

import { Taco } from '../models/taco';
import { TACOS } from './fakeTacos';

@Injectable()
export class TacoService {
  getCartCost(): number {
    let total = 0;
    for(let taco of TACOS) {
      total += taco.cost * taco.quantity;
    }
    return total;
  }
  getTacos(): Taco[] {
    return TACOS;
  }
  addTaco(newTaco: Taco): string {
    TACOS.push(newTaco);
    return "Taco added to cart";
  }
  removeTaco(index: number): string {
    if(index < TACOS.length) {
      TACOS.splice(index, 1);
      return "Taco successfully removed.";
    }
    return "There was an error removing that taco.";
  }
}