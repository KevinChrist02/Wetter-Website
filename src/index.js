import { fetchWeatherApi } from "openmeteo";

const weather = document.querySelector(".weather");
const locationInput = document.querySelector("#location");
const button = document.querySelector("#submit");

button.addEventListener("click", async () => {
  const location = locationInput.value;
  if (location) {
    const coordinates = await GeolocationCoordinates(location);
    if (coordinates) {
      const weatherData = fetchWeatherApi(
        coordinates.latidute,
        coordinates.longitude
      );
      displayWeather(weatherData);
    } else {
      weather.innerHTML = "<p>Ort nicht gefunden</p>";
    }
  }
});
