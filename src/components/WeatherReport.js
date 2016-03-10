import React, { Component, PropTypes } from 'react';

export default class WeatherReport extends Component {
  render() {
    const { data, statusText } = this.props;

    return (
      <div>
        {statusText ? <div>{statusText}</div> : null}
        <div>
          <h2>{data.timezone} {data.currently.temperature} °F</h2>
        </div>
      </div>
    );
  }
}

WeatherReport.propTypes = {
  data: PropTypes.object.isRequired,
  statusText: PropTypes.string
};
