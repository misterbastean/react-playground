import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import _ from 'underscore';

// Components
import CardHolder from './components/CardHolder/CardHolder'
import HourlyContainer from './components/HourlyContainer/HourlyContainer';

// Config
import config from './config';
const owmUrl = `https://api.openweathermap.org/data/2.5/forecast?q=hartsville,sc,us&units=Imperial&mode=json&appid=${config.openWeatherMapAPIKey}`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      forecastData: [],
      hourlyData: {},
      selectedDay: null
    };
  }

  dayCardClickHandler = (dayNum) => {
    if (this.state.selectedDay !== dayNum) {
      this.setState({
        selectedDay: dayNum
      })
    } else {
      this.setState({
        selectedDay: null
      })
    }
  }

  componentDidMount() {
    // Get forecast data
    fetch(owmUrl)
    .then(res => res.json())
    .then(
      (result) => {
        // ===============
        // Format data
        // ===============

        // Group retrieved data by calendar day
        const groups = _.groupBy(result.list, (item) => {
          return moment.unix(item.dt).startOf('day').format();
        });

        const forecastData = []
        for (let i = 0; i < 5; i++) {
          // Push forecast data into each day's data item
          forecastData[i] = {
            dayNum: i,
            dayName: '',
            highTemp: null,
            lowTemp: null,
            iconCode: '',
            data: groups[Object.keys(groups)[i]]
          }

          // Get day name
          const dateStamp = forecastData[i].data[0].dt
          const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
          let day = new Date();
          day.setTime(dateStamp*1000);
          forecastData[i].dayName = days[day.getDay()]

          // Get high and low temps
          let high = -1000; // Init with absurdly low number
          let low = 1000; // Init with absurdly high number
          forecastData[i].data.forEach((item) => {
            if (item.main.temp_max > high) {
              high = item.main.temp_max
            }
            if (item.main.temp_min < low) {
              low = item.main.temp_min
            }
          });

          forecastData[i].highTemp = high;
          forecastData[i].lowTemp = low;

          // Get icon code, replacing last character with "d" for the day version
          forecastData[i].iconCode = forecastData[i].data[0].weather[0].icon.replace(/.$/,"d")
        }

        this.setState({
          isLoaded: true,
          forecastData
        });
      },
      (error) => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ?
          <CardHolder
            forecastData={this.state.forecastData}
            dayCardClick={this.dayCardClickHandler}
            selectedDay={this.state.selectedDay}
          /> :
          <h1>Loading...</h1>
        }
        {this.state.selectedDay === 0 || this.state.selectedDay ?
          <HourlyContainer
            data={this.state.forecastData[this.state.selectedDay].data}
          />
          : ''
        }
      </div>
    );
  }

}

export default App;
