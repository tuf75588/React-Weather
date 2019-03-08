import React from 'react';
import helpers from '../utils/helpers';
function LocalForecast({ data }) {
  const {
    coord,
    name,
    weather,
    main: { temp }
  } = data;
  const timestamp = helpers.convertUnixTimeCode(data.dt);
  console.log(timestamp);
  const icon = `images/weather-icons/${weather[0].icon}.svg`;
  return (
    <div className='local-forecast-container' style={{ textAlign: 'center' }}>
      <h1>
        Weather Data for {name}, PA as of {timestamp}
      </h1>
      <h1>{temp} °F</h1>
      <h1>{weather[0].description}</h1>
      <img src={icon} className='icon' alt='OpenWeatherMAP icon for weather description' />
    </div>
  );
}
export default LocalForecast;
