import React, { Component, PropTypes } from 'react';
import BarChart from 'components/charts/BarChart';

export default class WeatherReport extends Component {

  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <div className="degrees-container center">
          <h1>
            <span>{ data.timezone ? data.timezone.split('/')[1].replace('_', ' ') : ''} </span>
            <span className="number">{data.currently}</span>
            <span> °F</span>
          </h1>
        </div>

        <div className="bar-chart-container">
          <BarChart data={data.daily} width={600} height={300} />
        </div>
      </div>
    );
  }
}

WeatherReport.propTypes = {
  data: PropTypes.shape({
    timezone: PropTypes.string.isRequired,
    daily: PropTypes.arrayOf(PropTypes.number).isRequired,
    currently: PropTypes.number.isRequired
  })
};
