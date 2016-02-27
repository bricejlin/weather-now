import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { getWeatherData } from './actions'
import Root from './containers/Root';

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

// New York
store.dispatch(getWeatherData({
  lat: '40.7127840',
  lon: '-74.0059410'
}));

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
