import { CondimentDecorator } from './CondimentDecorator';
import { Beverage } from '../beverages/Beverage';
import { BeverageSizeEnum } from '../beverages/beverage-size.enum';

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
        switch(this.getSize()) { 
            case BeverageSizeEnum.GRANDE: { 
                return this.beverage.cost() + 0.15
            } 
            case BeverageSizeEnum.TALL: { 
                return this.beverage.cost() + 0.20
            } 
            case BeverageSizeEnum.VENTI: { 
                return this.beverage.cost() + 0.25
             } 
        
         } 
    }
}