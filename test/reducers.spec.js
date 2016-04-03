import expect from 'expect';

import * as types from '../src/constants';
import weather from '../src/reducers/weather';

describe('REDUCERS', () => {
  describe('Weather Reducer', () => {
    it('should return default state if action is undefined', () => {
      const initialState = {
        data: {},
        fetched: false
      };
      const nextState = weather(undefined, 'BLAH');
      expect(nextState).toEqual(initialState);
    });

    it('should return new state from a RECEIVE_WEATHER_DATA_SUCCESS action', () => {
      const action = {
        type: types.RECEIVE_WEATHER_DATA_SUCCESS,
        payload: {
          data: {
            currently: {
              temperature: 39
            }
          }
        }
      };

      const nextState = weather({}, action);
      expect(nextState.data.currently.temperature).toEqual(39);
    });
  });
});
