import { expect } from 'chai';

import weather from '../src/reducers/weather';

describe('REDUCERS', () => {
  describe('Weather Reducer', () => {
    it('should return default state if action is undefined', () => {
      const initialState = {};
      const nextState = weather(initialState, 'BLAH');
      expect(nextState).to.eql(initialState);
    });
  });
});
