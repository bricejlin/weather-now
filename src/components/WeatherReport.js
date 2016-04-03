import React, { Component, PropTypes } from 'react';
import BarChart from './charts/BarChart';

export default class WeatherReport extends Component {
  render() {
    const { data } = this.props;
    const dailyTemps = data.daily.data.map(x => x.temperatureMax);

    return (
      <div className="container">
        <div className="degrees-container">
          {
            data.currently.temperature ?
            <h1>
              <span>{ data.timezone ? data.timezone.split('/')[1].replace('_', ' ') : ''} </span>
              <span className="number">{data.currently.temperature}</span>
              <span> °F</span>
            </h1> : <h1>Fetching weather...</h1>
          }

        </div>
        <div className="line-chart-container">
          <BarChart data={dailyTemps} width={600} height={300} />
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
    }),
    daily: PropTypes.shape({
      data: PropTypes.array.isRequired
    })
  }),
  statusText: PropTypes.string
};

WeatherReport.defaultProps = {
  data: {
    daily: {
      data: []
    }
  }
};
