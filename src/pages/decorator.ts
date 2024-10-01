import { BeverageSizeEnum } from "../decorator/starbuzz-coffe/beverages/beverage-size.enum";
import { Latte } from "../decorator/starbuzz-coffe/beverages/Latte";
import { Mocha } from "../decorator/starbuzz-coffe/condiments/Mocha";
import { Soy } from "../decorator/starbuzz-coffe/condiments/Soy";
import { Whip } from "../decorator/starbuzz-coffe/condiments/Whip";

// Create a Latte
let beverage = new Latte(BeverageSizeEnum.VENTI);

// Add Soy
beverage = new Soy(beverage);

// Add Mocha (Double Mocha implies adding Mocha twice)
beverage = new Mocha(beverage);
beverage = new Mocha(beverage);

// Add Whip
beverage = new Whip(beverage);

// Print description and cost
console.log(beverage.getDescription()); // Output: Latte, Soy, Mocha, Mocha, Whip
console.log(beverage.cost());           // Output: 2.49 + 0.15 + (0.20 * 2) + 0.10 = 3.14

document.querySelector<HTMLDivElement>(
    '#app'
)!.innerHTML = `
${beverage.getDescription()}
${beverage.cost()}
`;
