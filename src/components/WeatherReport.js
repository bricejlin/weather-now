import React, { Component } from 'react';

export default class WeatherReport extends Component {
  render() {
    const { main } = this.props;

    return (
      <div>
        <h2>New York {main.temp} °F</h2>
      </div>
    );
  }
}
