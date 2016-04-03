import {
  RECEIVE_WEATHER_DATA_SUCCESS,
  RECEIVE_WEATHER_DATA_FAILURE
} from '../constants';

export const initialState = {
  data: {
    daily: [],
    timezone: '',
    currently: null
  },
  fetched: false
};

export default function now(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_WEATHER_DATA_SUCCESS:
    return Object.assign({}, state, {
      data: Object.assign({}, state.data, {
        timezone: action.payload.data.timezone,
        daily: action.payload.data.daily.data.map(x => x.temperatureMax),
        currently: action.payload.data.currently.temperature
      }),
      fetched: true
    });
  case RECEIVE_WEATHER_DATA_FAILURE:
    return state;
  default:
    return state;
  }
}
