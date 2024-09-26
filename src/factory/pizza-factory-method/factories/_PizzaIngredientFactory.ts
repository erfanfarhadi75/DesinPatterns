import { Cheese } from "../ingredients/_Cheese";
import { Clams } from "../ingredients/_Clams";
import { Dough } from "../ingredients/_Dough";
import { Sauce } from "../ingredients/_Sauce";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createClams(): Clams;
}