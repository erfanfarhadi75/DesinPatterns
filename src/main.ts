import './style.css';
import { setupCounter } from './counter.ts';
import { WeatherData } from './weather/WeatherData.ts';
import { CurrentConditionsDisplay } from './weather/CurrentConditionsDisplay.ts';

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

setInterval(() => {
  weatherData.setMeasurements(Math.random().toFixed(1), 65, 30.4);
}, 500);
