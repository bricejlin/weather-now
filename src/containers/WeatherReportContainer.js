import React, { Component, PropTypes } from 'react';
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

WeatherReportContainer.propTypes = {
  weather: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

export default connect(
  mapStateToProps
)(WeatherReportContainer);
