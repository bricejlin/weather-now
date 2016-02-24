import { RECEIVE_WEATHER_DATA } from '../constants';
import objectAssign from 'object-assign';

export default function now(state = {}, action) {
  switch (action.type) {
  case RECEIVE_WEATHER_DATA:
    return objectAssign({}, state, action.data);
  default:
    return state;
  }
}
