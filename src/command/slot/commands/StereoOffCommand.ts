import { Stereo } from "../devices/Stereo";
import { Command } from "./Command";

export class StereoOffCommand implements Command {
    constructor(private stereo: Stereo) { }

    execute() {
        this.stereo.off();
    }
}