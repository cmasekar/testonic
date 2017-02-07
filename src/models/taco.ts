export class Taco {
    tortilla;
    tortillaOptions;
    protein;
    toppings;
    cheese;
    salsa;
    sauces;
    quantity;
    cost;
  constructor(tortilla: string, tortillaOptions: {rice: boolean, beans: boolean},
        protein: Array<string>, toppings: Array<string>, cheese: Array<string>,
        salsa: Array<string>, sauces: Array<string>, quantity: number, cost: number) {
    this.tortilla = tortilla;
    this.tortillaOptions = tortillaOptions;
    this.protein = protein;
    this.toppings = toppings;
    this.cheese = cheese;
    this.salsa = salsa;
    this.sauces = sauces;
    this.quantity = quantity;
    this.cost = cost;
  }
}