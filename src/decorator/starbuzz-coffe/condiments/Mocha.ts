import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../beverages/Beverage';

export class Mocha extends CondimentDecorator {
    private beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        return this.beverage.cost() + 0.20; // Cost of Mocha
    }
}
