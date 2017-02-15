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
  addExtra(newExtra: Extra) {
    this.EXTRAS.push(newExtra);
  }
  removeExtra(index: number) {
    if(index < this.EXTRAS.length) {
      this.EXTRAS.splice(index, 1);
    }
  }
  removeAllExtras() {
    this.EXTRAS = [];
  }
}