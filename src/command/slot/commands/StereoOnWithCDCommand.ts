import { Stereo } from "../devices/Stereo";
import { Command } from "./Command";

export class StereoOnWithCDCommand implements Command {
    constructor(private stereo: Stereo) { }

    execute() {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }
}