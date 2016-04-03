import React, { Component, PropTypes } from 'react';

export default class WeatherReport extends Component {

  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <div className="degrees-container center">
          <h1>
            <span>{ data.timezone ? data.timezone.split('/')[1].replace('_', ' ') : ''} </span>
            <span className="number">{data.currently.temperature}</span>
            <span> °F</span>
          </h1>
        </div>
      </div>
    );
  }
}

WeatherReport.propTypes = {
  data: PropTypes.shape({
    timezone: PropTypes.string.isRequired,
    currently: PropTypes.shape({
      temperature: PropTypes.number.isRequired
    })
  })
};
