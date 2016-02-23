import { RECEIVE_WEATHER_DATA } from '../constants/ActionTypes';

export default function now(state = {}, action) {
  switch (action.type) {
  case RECEIVE_WEATHER_DATA:
    return Object.assign({}, state, action.data);
  default:
    return state;
  }
}
