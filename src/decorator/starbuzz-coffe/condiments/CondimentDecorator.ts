import { Beverage } from '../beverages/Beverage';

export abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string;
}