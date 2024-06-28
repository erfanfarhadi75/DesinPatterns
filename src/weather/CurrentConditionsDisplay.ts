// CurrentConditionsDisplay.ts

import { WeatherData } from './WeatherData';
import { DisplayElement, Observer } from './weather.model';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature!: number;
  private humidity!: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    document.querySelector<HTMLDivElement>(
      '#app'
    )!.innerHTML = `Current conditions: ${this.temperature}°F degrees and ${this.humidity}% humidity`;
  }
}
