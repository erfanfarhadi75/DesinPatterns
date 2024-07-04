import { Beverage } from "./Beverage";


export class Latte extends Beverage {
    constructor() {
        super();
        this.description = "Latte";
    }

    cost(): number {
        return 2.49; // Cost of Latte
    }
}
