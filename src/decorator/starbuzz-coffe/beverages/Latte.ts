import { Beverage } from "./Beverage";
import { BeverageSizeEnum } from "./beverage-size.enum";


export class Latte extends Beverage {
    constructor(size:BeverageSizeEnum) {
        super();
        this.setSize(size);
        this.setDescription("Latte");
    }

    cost(): number {
        switch(this.getSize()) { 
            case BeverageSizeEnum.GRANDE: { 
               return 2.49
            } 
            case BeverageSizeEnum.TALL: { 
                return 3.49
            } 
            case BeverageSizeEnum.VENTI: { 
                return 4.49
             } 
        
         } 
    }
}
