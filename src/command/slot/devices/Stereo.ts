export class Stereo {
    constructor(private location: string) { }

    on() {
        console.log(`${this.location} stereo is ON`);
    }

    off() {
        console.log(`${this.location} stereo is OFF`);
    }

    setCD() {
        console.log(`${this.location} stereo is set to CD mode`);
    }

    setVolume(volume: number) {
        console.log(`${this.location} stereo volume set to ${volume}`);
    }
}