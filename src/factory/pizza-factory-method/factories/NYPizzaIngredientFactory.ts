import { Cheese } from "../ingredients/_Cheese";
import { Clams } from "../ingredients/_Clams";
import { Dough } from "../ingredients/_Dough";
import { FreshClams } from "../ingredients/FreshClams";
import { MarinaraSauce } from "../ingredients/MarinaraSauce";
import { ReggianoCheese } from "../ingredients/ReggianoCheese";
import { Sauce } from "../ingredients/_Sauce";
import { ThinCrustDough } from "../ingredients/ThinCrustDough";
import { PizzaIngredientFactory } from "./_PizzaIngredientFactory";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createClams(): Clams {
    return new FreshClams();
  }
}