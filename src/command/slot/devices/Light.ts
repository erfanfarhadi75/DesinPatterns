export class Light {
    constructor(private location: string) { }

    on() {
        console.log(`${this.location} light is ON`);
    }

    off() {
        console.log(`${this.location} light is OFF`);
    }
}