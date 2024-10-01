import { CurrentConditionsDisplay } from "../observer/weather/CurrentConditionsDisplay";
import { WeatherData } from "../observer/weather/WeatherData";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

setInterval(() => {
    weatherData.setMeasurements(Number(Math.random().toFixed(1)), 65, 30.4);
}, 500);