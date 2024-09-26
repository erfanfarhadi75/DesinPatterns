import { Cheese } from "./_Cheese";

export class ReggianoCheese implements Cheese {
  getType(): string {
    return 'Reggiano Cheese';
  }
}