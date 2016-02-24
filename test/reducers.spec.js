import { expect } from 'chai';

import * as types from '../src/constants';
import weather from '../src/reducers/weather';

describe('REDUCERS', () => {
  describe('Weather Reducer', () => {
    it('should return default state if action is undefined', () => {
      const initialState = {};
      const nextState = weather(undefined, 'BLAH');
      expect(nextState).to.eql(initialState);
    });

    it('should return new state from a RECEIVE_WEATHER_DATA action', () => {
      const action = {
        type: types.RECEIVE_WEATHER_DATA,
        data: {
          main: {
            temp: 39
          }
        }
      };

      const nextState = weather({}, action);
      expect(nextState.main.temp).to.equal(39);
    });
  });
});
