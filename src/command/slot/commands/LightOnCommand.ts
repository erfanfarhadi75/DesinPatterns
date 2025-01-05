import { Light } from "../devices/Light";
import { Command } from "./Command";

export class LightOnCommand implements Command {
    constructor(private light: Light) { }

    execute() {
        this.light.on();
    }
}