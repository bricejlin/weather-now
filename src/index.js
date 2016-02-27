import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getWeatherData } from './actions';
import Root from './containers/Root';
import debugCreator from 'debug';

const debug = debugCreator('geolocation');


const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

function success(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  debug('Successfully retrieved location', [lat, lon]);

  store.dispatch(getWeatherData({ lat, lon }));
}

function error() {
  console.log('Unable retrieve user location. Defaulting to NY');

  debug('Failed to retrieve location');

  store.dispatch(getWeatherData({
    lat: '40.7127840',
    lon: '-74.0059410'
  }));
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}

window.myDebug = debugCreator;

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
