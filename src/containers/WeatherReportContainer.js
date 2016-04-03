import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WeatherReport from 'components/WeatherReport';

class WeatherReportContainer extends Component {

  render() {
    const { weather } = this.props;

    return (
      <div className="container">
        <div className="logo center">weatherNOW</div>
        {weather.fetched ?
          <WeatherReport {...weather} /> :
          <div className="center">Fetching weather...</div>}
      </div>
    );
  }
}

WeatherReportContainer.propTypes = {
  weather: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

export default connect(
  mapStateToProps
)(WeatherReportContainer);
