const API_KEY = 'd9dc2bc5ee8b7a93e961945fb5723e7e';

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&units=imperial`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?APPID=${API_KEY}&units=imperial`;

function getCurrentWeather(lat, lon) {
  return fetch(`${WEATHER_URL}&lat=${lat}&lon=${lon}`).then((response) => {
    return response.json();
  });
}

function getForecastData(zip) {
  return fetch(`${FORECAST_URL}&zip=${zip},us&cnt=5`).then((data) => {
    return data.json();
  });
}

export default {
  getCurrentWeather,
  getForecastData
};
