import { ChicagoPizzaStore } from "../factory/pizza-factory-method/stores/ChicagoPizzaStore";
import { NYPizzaStore } from "../factory/pizza-factory-method/stores/NYPizzaStore";

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

let pizza = nyStore.orderPizza("cheese");
console.log(`Ordered a ${pizza.getName()}\n`);

pizza = chicagoStore.orderPizza("clam");
console.log(`Ordered a ${pizza.getName()}\n`);