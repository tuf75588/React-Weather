import React from 'react';

function Detail(props) {
  const { city } = props.match.params;
  const { state: weatherData } = props.location;
  console.log('weatherData', weatherData);
  const icon = `/images/weather-icons/${weatherData.weather[0].icon}.svg`;
  return (
    <div>
      <h1 className='forecast-header'>{city}</h1>
      <div className='detail-container'>
        <img src={icon} className='icon' alt='weather svg for corresponding weather condition' />
        <h1>{new Date(weatherData.dt * 1000).toDateString('en-US')}</h1>
        <div style={{ textAlign: 'center' }}>
          <hr />
          <h1>{weatherData.weather[0].description}</h1>
          <h1>Max temp: {weatherData.temp.max}</h1>
          <h1>Min temp: {weatherData.temp.min}</h1>
        </div>
      </div>
    </div>
  );
}
export default Detail;
