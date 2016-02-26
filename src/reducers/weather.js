import {
  RECEIVE_WEATHER_DATA_SUCCESS,
  RECEIVE_WEATHER_DATA_FAILURE
} from '../constants';

const initialState = {
  data: {
    currently: {
      temperature: 0
    }
  },
  statusText: null,
};

export default function now(state = initialState, action) {
  switch (action.type) {
  case RECEIVE_WEATHER_DATA_SUCCESS:
    return Object.assign({}, state, {
      statusText: `Successfully fetched weather!`,
      data: action.payload.data
    });
  case RECEIVE_WEATHER_DATA_FAILURE:
    return Object.assign({}, state, {
      statusText: `Error: ${action.payload.status} ${action.payload.statusText}`
    });
  default:
    return state;
  }
}
