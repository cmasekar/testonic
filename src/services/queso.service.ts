import { Injectable } from '@angular/core';

import { Queso } from '../models/queso';


@Injectable()
export class QuesoService {
  QUESOS: Queso[] = [];
  getQuesoCost(): number {
    let total = 0;
    for(let queso of this.QUESOS) {
      total += queso.cost;
    }
    return total;
  }
  getQuesos(): Queso[] {
    return this.QUESOS;
  }
  addQueso(newQueso: Queso): string {
    this.QUESOS.push(newQueso);
    return "Queso added to cart";
  }
  removeQueso(index: number): string {
    if(index < this.QUESOS.length) {
      this.QUESOS.splice(index, 1);
      return "Queso successfully removed.";
    }
    return "There was an error removing that queso.";
  }
  getQueso(index: number): Queso {
    return this.QUESOS[index];
  }
  updateQueso(newQueso: Queso, index: number) {
    this.QUESOS[index] = newQueso;
  }
  removeAllQuesos() {
    this.QUESOS = [];
  }
}