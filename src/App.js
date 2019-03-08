import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ZipCode from './components/ZipCode';
import LocalForecast from './components/LocalForecast';
import Forecast from './components/Forecast';
import Detail from './components/Detail';
import API from './utils/API';
class App extends Component {
  state = {
    loading: true,
    localForecast: null
  };
  componentDidMount = () => {
    this.loadWeatherData = API.getCurrentWeather('40.0959', '-75.1252').then((localForecast) => {
      this.setState({ localForecast, loading: false });
    });
  };

  render() {
    const { localForecast, loading } = this.state;

    return (
      <Router>
        <div className='container'>
          <Route
            render={(props) => {
              return (
                <div className='navbar'>
                  <Link to='/' className='home-link'>
                    <h1 className='logo'>React Weather</h1>
                  </Link>
                  <ZipCode
                    direction='row'
                    handleSubmit={(zip) =>
                      props.history.push({ pathname: '/forecast', search: `?zip=${zip}`, state: zip })
                    }
                  />
                </div>
              );
            }}
          />
          <Route
            exact
            path='/'
            render={(props) => {
              return (
                <div className='home-container' style={{ backgroundImage: "url('images/pattern.svg')" }}>
                  {loading === true ? <p>Loading..</p> : <LocalForecast data={localForecast} />}
                  <ZipCode
                    direction='column'
                    handleSubmit={(zip) =>
                      props.history.push({ pathname: '/forecast', search: `?zip=${zip}`, state: zip })
                    }
                  />
                </div>
              );
            }}
          />
          <Route path='/forecast' component={Forecast} />
          <Route path='/details/:city' component={Detail} />
        </div>
      </Router>
    );
  }
}

export default App;
