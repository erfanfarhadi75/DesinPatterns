import { Cheese } from "../ingredients/_Cheese";
import { Clams } from "../ingredients/_Clams";
import { Dough } from "../ingredients/_Dough";
import { Sauce } from "../ingredients/_Sauce";

export abstract class Pizza {
  name!: string;
  dough!: Dough;
  sauce!: Sauce;
  cheese!: Cheese;
  clams!: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log(`Baking ${this.name}...`);
  }

  cut(): void {
    console.log(`Cutting ${this.name}...`);
  }

  box(): void {
    console.log(`Boxing ${this.name}...`);
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}