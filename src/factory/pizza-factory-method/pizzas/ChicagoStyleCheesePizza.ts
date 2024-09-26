import { PizzaIngredientFactory } from "../factories/_PizzaIngredientFactory";
import { Pizza } from "./_Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
        this.name = "Chicago Style Cheese Pizza";
    }

    prepare(): void {
        console.log(`Preparing ${this.name}...`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}