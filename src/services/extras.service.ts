import { Injectable } from '@angular/core';

import { Extra } from '../models/extra';


@Injectable()
export class ExtrasService {
  EXTRAS: Extra[] = [];
  getExtrasCost(): number {
    let total = 0;
    for(let extra of this.EXTRAS) {
      total += extra.cost;
    }
    return total;
  }
  getExtras(): Extra[] {
    return this.EXTRAS;
  }
  addExtra(newExtra: Extra): string {
    this.EXTRAS.push(newExtra);
    return "Item added to cart";
  }
  removeExtra(index: number): string {
    if(index < this.EXTRAS.length) {
      this.EXTRAS.splice(index, 1);
      return "Item successfully removed.";
    }
    return "There was an error removing that item.";
  }
  getExtra(index: number): Extra {
    return this.EXTRAS[index];
  }
  updateExtra(newExtra: Extra, index: number) {
    this.EXTRAS[index] = newExtra;
  }
  removeAllExtras() {
    this.EXTRAS = [];
  }
}