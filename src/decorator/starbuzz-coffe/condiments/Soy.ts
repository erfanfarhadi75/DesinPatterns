import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../beverages/Beverage';

export class Soy extends CondimentDecorator {
    private beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    cost(): number {
        return this.beverage.cost() + 0.15; // Cost of Soy
    }
}