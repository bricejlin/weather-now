import weather from '../api/weather';
import * as types from '../constants/ActionTypes';

function receiveWeatherData(data) {
  return {
    type: types.RECEIVE_WEATHER_DATA,
    data
  };
}

export function getWeatherData(cityName) {
  return dispatch => {
    weather.getWeatherData(cityName)
    .then(data => {
      dispatch(receiveWeatherData(data));
    });
  }
}
