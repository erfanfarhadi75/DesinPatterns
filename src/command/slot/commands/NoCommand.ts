import { Command } from "./Command";

export class NoCommand implements Command {
    execute() {
        console.log("No command assigned.");
    }
}