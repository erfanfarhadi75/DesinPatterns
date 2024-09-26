import { ChicagoPizzaIngredientFactory } from "../factories/ChicagoPizzaIngredientFactory";
import { ChicagoStyleCheesePizza } from "../pizzas/ChicagoStyleCheesePizza";
import { ChicagoStyleClamPizza } from "../pizzas/ChicagoStyleClamPizza";
import { Pizza } from "../pizzas/_Pizza";
import { PizzaStore } from "./_PizzaStore";

export class ChicagoPizzaStore extends PizzaStore {
    protected createPizza(type: string): Pizza {
        const ingredientFactory = new ChicagoPizzaIngredientFactory();

        switch (type) {
            case "cheese":
                return new ChicagoStyleCheesePizza(ingredientFactory);
            case "clam":
                return new ChicagoStyleClamPizza(ingredientFactory);
            default:
                throw new Error("Invalid pizza type");
        }
    }
}