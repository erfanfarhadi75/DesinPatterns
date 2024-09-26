import { NYPizzaIngredientFactory } from "../factories/NYPizzaIngredientFactory";
import { NYStyleCheesePizza } from "../pizzas/NYStyleCheesePizza";
import { NYStyleClamPizza } from "../pizzas/NYStyleClamPizza";
import { Pizza } from "../pizzas/_Pizza";
import { PizzaStore } from "./_PizzaStore";

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    const ingredientFactory = new NYPizzaIngredientFactory();

    switch (type) {
      case "cheese":
        return new NYStyleCheesePizza(ingredientFactory);
      case "clam":
        return new NYStyleClamPizza(ingredientFactory);
      default:
        throw new Error("Invalid pizza type");
    }
  }
}