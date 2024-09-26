import { Cheese } from "./_Cheese";

export class MozzarellaCheese implements Cheese {
  getType(): string {
    return 'Mozzarella Cheese';
  }
}