import React, { Component } from 'react';
import WeatherReportContainer from './WeatherReportContainer';

export default class Root extends Component {
  render() {
    return (
      <div>
        <h1>weatherNOW</h1>
        <p>Your #1 source for real-time, one place, one time, one location weather data</p>
        <WeatherReportContainer />
      </div>
    );
  }
}
