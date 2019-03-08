import React from 'react';
import API from '../utils/API';
class Forecast extends React.Component {
  state = {
    forecast: null
  };
  componentDidMount = () => {
    const { state } = this.props.location;
    this.loadWeather = API.getForecastData(state).then((response) => {
      this.setState(() => {
        return {
          forecast: response.list
        };
      });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const urlparams = new URLSearchParams(this.props.location.search);
    const zip = urlparams.get('zip');
    const prevZip = prevProps.location.state;
    console.log(prevZip);
    console.log(zip);
    if (zip !== prevZip) {
      API.getForecastData(zip).then((response) => {
        this.setState(() => {
          return {
            forecast: response.list
          };
        });
      });
    }
  };

  handleSubmit = (city) => {
    this.props.history.push({
      pathname: `/details/${this.props.location.state}`,
      state: city
    });
  };
  render() {
    const { forecast } = this.state;
    return (
      <div>
        <h1 className='forecast-header'>Weather for {this.props.location.state}</h1>
        <div className='forecast-container'>
          {!forecast ? (
            <h1>Loading...</h1>
          ) : (
            forecast.map((dayItem) => {
              return (
                <div className='forecast-items' onClick={() => this.handleSubmit(dayItem)}>
                  <img
                    className='icon'
                    src={`images/weather-icons/${dayItem.weather[0].icon}.svg`}
                    alt='Weather Icon for given day'
                  />
                  <h1>{new Date(dayItem.dt * 1000).toDateString('en-US')}</h1>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}
export default Forecast;
