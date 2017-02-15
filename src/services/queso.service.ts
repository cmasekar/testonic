import { Injectable } from '@angular/core';

import { Queso } from '../models/queso';


@Injectable()
export class QuesoService {
  QUESOS: Queso[] = [];
  getQuesoCost(): number {
    let total = 0;
    for(let queso of this.QUESOS) {
      if(queso.isSharing) {
        total += queso.cost / queso.peopleSharing;
      }
      else {
        total += queso.cost;
      }
    }
    return total;
  }
  getQuesos(): Queso[] {
    return this.QUESOS;
  }
  addQueso(newQueso: Queso) {
    this.QUESOS.push(newQueso);
  }
  removeQueso(index: number) {
    if(index < this.QUESOS.length) {
      this.QUESOS.splice(index, 1);
    }
  }
  removeAllQuesos() {
    this.QUESOS = [];
  }
}