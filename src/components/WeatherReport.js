import React, { Component } from 'react';

export default class WeatherReport extends Component {
  render() {
    const { data, statusText } = this.props;

    return (
      <div>
        {statusText ? <div>{statusText}</div> : null}
        <div>
          <h2>New York {data.currently.temperature} °F</h2>
        </div>
      </div>
    );
  }
}
