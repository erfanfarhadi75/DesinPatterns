import { Dough } from "./_Dough";

export class ThinCrustDough implements Dough {
  getType(): string {
    return 'Thin Crust Dough';
  }
}