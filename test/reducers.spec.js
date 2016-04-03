import expect from 'expect';

import * as types from '../src/constants';
import weather, { initialState } from '../src/reducers/weather';

describe('REDUCERS', () => {
  describe('Weather Reducer', () => {
    it('should return default state if action is undefined', () => {
      const nextState = weather(undefined, 'BLAH');
      expect(nextState).toEqual(initialState);
    });

    it('should return new state from a RECEIVE_WEATHER_DATA_SUCCESS action', () => {
      const action = {
        type: types.RECEIVE_WEATHER_DATA_SUCCESS,
        payload: {
          data: {
            daily: {
              data: []
            },
            currently: {
              temperature: 39
            }
          }
        }
      };

      const nextState = weather(undefined, action);
      expect(nextState.data.currently).toEqual(39);
    });
  });
});
