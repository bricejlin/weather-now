import React, { Component, PropTypes } from 'react';

export default class WeatherReport extends Component {

  render() {
    const { data, statusText } = this.props;

    return (
      <div>
        {statusText ? <div>{statusText}</div> : null}
        <div className="degrees-container">
          <span className="logo">weatherNOW</span>
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
  data: PropTypes.object.isRequired,
  statusText: PropTypes.string
};
