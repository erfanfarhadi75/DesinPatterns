import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../beverages/Beverage';

export class Whip extends CondimentDecorator {
    private beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number {
        return this.beverage.cost() + 0.10; // Cost of Whip
    }
}