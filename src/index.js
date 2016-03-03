import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { getWeatherData } from './actions';
import configureStore from './store';
import Root from './containers/Root';
import debugCreator from 'debug';

const debug = debugCreator('geolocation');

const store = configureStore();

function success(pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;

  debug('Successfully retrieved location', [lat, lon]);

  store.dispatch(getWeatherData({ lat, lon }));
}

function error() {
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
