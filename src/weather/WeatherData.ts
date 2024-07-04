// WeatherData.ts

import { Observer, Subject } from "./weather.model";


export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
