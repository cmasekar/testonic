import { Taco } from '../models/taco';
export const TACOS: Taco[] = [
  {
    tortilla: "Ju-Ju",
    tortillaOptions: {
      rice: false,
      beans: false,
    },
    protein: ["House Made Chorizo"],
    toppings: ["Lettuce", "Cilantro + Onions"],
    cheese: ["Queso Fresco"],
    salsa: ["Salsa Verde"],
    sauces: ["Condado Secret Taco Sauce"],
    quantity: 1,
    cost: 4
  },
  {
    tortilla: "Peezler",
    tortillaOptions: {
      rice: false,
      beans: false,
    },
    protein: ["Pulled Pork"],
    toppings: ["Tomatoes"],
    cheese: ["Chihuahua"],
    salsa: ["Salsa Roja"],
    sauces: ["Ghost Pepper"],
    quantity: 2,
    cost: 4
  }
];