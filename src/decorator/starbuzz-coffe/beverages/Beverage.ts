import { BeverageSizeEnum } from "./beverage-size.enum";

export abstract class Beverage {
    private description: string = "Unknown Beverage";
    private size = BeverageSizeEnum.TALL;

    getSize():BeverageSizeEnum{
        return this.size;
    }

    setSize(size:BeverageSizeEnum):void{
        this.size = size;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description:string):void{
        this.description = description;
    }

    abstract cost(): number;
}
