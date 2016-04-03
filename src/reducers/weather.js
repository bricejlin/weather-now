import {
  RECEIVE_WEATHER_DATA_SUCCESS,
  RECEIVE_WEATHER_DATA_FAILURE
} from '../constants';

const initialState = {
  data: {},
  fetched: false
};

export default function now(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_WEATHER_DATA_SUCCESS:
    return Object.assign({}, state, {
      data: action.payload.data,
      fetched: true
    });
  case RECEIVE_WEATHER_DATA_FAILURE:
    return state;
  default:
    return state;
  }
}
