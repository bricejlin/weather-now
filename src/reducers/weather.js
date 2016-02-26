import {
  RECEIVE_WEATHER_DATA_SUCCESS,
  RECEIVE_WEATHER_DATA_FAILURE
} from '../constants';

import objectAssign from 'object-assign';

const initialState = {
  data: {
    main: {
      temp: 0
    }
  },
  statusText: null,
};

export default function now(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_WEATHER_DATA_SUCCESS:
    return objectAssign({}, state, {
      statusText: `Successfully fetched weather!`,
      data: action.payload.data
    });
  case RECEIVE_WEATHER_DATA_FAILURE:
    return objectAssign({}, state, {
      statusText: `Error: ${action.payload.status} ${action.payload.statusText}`
    });
  default:
    return state;
  }
}
