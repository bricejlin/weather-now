import weather from '../api/weather';
import * as types from '../constants';

function receiveWeatherDataSuccess(data) {
  return {
    type: types.RECEIVE_WEATHER_DATA_SUCCESS,
    payload: {
      data
    }
  };
}

function receiveWeatherDataFailure(error) {
  return {
    type: types.RECEIVE_WEATHER_DATA_FAILURE,
    payload: {
      status: error.status,
      statusText: error.statusText
    }
  };
}

export function getWeatherData(coord) {
  return dispatch => {
    weather.getWeatherData(coord)
    .then(data => {
      dispatch(receiveWeatherDataSuccess(data));
    })
    .catch(err => {
      dispatch(receiveWeatherDataFailure(err));
    });
  }
}
