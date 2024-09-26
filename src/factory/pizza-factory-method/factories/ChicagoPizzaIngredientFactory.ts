import { Cheese } from "../ingredients/_Cheese";
import { Clams } from "../ingredients/_Clams";
import { Dough } from "../ingredients/_Dough";
import { FrozenClams } from "../ingredients/FrozenClams";
import { MozzarellaCheese } from "../ingredients/MozzarellaCheese";
import { PlumTomatoSauce } from "../ingredients/PlumTomatoSauce";
import { Sauce } from "../ingredients/_Sauce";
import { ThickCrustDough } from "../ingredients/ThickCrustDough";
import { PizzaIngredientFactory } from "./_PizzaIngredientFactory";

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createClams(): Clams {
    return new FrozenClams();
  }
}