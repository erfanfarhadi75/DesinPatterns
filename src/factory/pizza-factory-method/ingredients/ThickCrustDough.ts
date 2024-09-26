import { Dough } from "./_Dough";

export class ThickCrustDough implements Dough {
  getType(): string {
    return 'Thick Crust Dough';
  }
}