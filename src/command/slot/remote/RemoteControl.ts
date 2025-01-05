import { Command } from "../commands/Command";
import { NoCommand } from "../commands/NoCommand";

export class RemoteControl {
    private onCommands: Command[];
    private offCommands: Command[];

    constructor() {
        this.onCommands = Array(7).fill(new NoCommand());
        this.offCommands = Array(7).fill(new NoCommand());
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPressed(slot: number) {
        this.onCommands[slot].execute();
    }

    offButtonWasPressed(slot: number) {
        this.offCommands[slot].execute();
    }

    renderAsHTML() {
        const table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";
        table.style.margin = "10px 0";

        // Add table headers
        const headers = ["Slot", "On Command", "Off Command"];
        const headerRow = document.createElement("tr");
        headers.forEach((header) => {
            const th = document.createElement("th");
            th.textContent = header;
            th.style.border = "1px solid black";
            th.style.padding = "5px";
            th.style.textAlign = "left";
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Add rows for each slot
        this.onCommands.forEach((onCommand, index) => {
            const offCommand = this.offCommands[index];
            const row = document.createElement("tr");

            // Slot column
            const slotCell = document.createElement("td");
            slotCell.textContent = index.toString();
            slotCell.style.border = "1px solid black";
            slotCell.style.padding = "5px";
            row.appendChild(slotCell);

            // On Command column
            const onCommandCell = document.createElement("td");
            onCommandCell.textContent = onCommand.constructor.name;
            onCommandCell.style.border = "1px solid black";
            onCommandCell.style.padding = "5px";
            row.appendChild(onCommandCell);

            // Off Command column
            const offCommandCell = document.createElement("td");
            offCommandCell.textContent = offCommand.constructor.name;
            offCommandCell.style.border = "1px solid black";
            offCommandCell.style.padding = "5px";
            row.appendChild(offCommandCell);

            table.appendChild(row);
        });

        return table;
    }
}