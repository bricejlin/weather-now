import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherReport from '../components/WeatherReport';

class WeatherReportContainer extends Component {
  render() {
    const { weather } = this.props;

    return (
      <WeatherReport {...weather} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

export default connect(
  mapStateToProps
)(WeatherReportContainer);
