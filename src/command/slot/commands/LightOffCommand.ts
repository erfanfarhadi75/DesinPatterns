import { Light } from "../devices/Light";
import { Command } from "./Command";

export class LightOffCommand implements Command {
    constructor(private light: Light) { }

    execute() {
        this.light.off();
    }
}