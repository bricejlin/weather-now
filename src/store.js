import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ];

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(...middleware));

  // if (process.env.NODE_ENV === 'development') {
  //   if (module.hot) {
  //     module.hot.accept('reducers', () => {
  //       const nextRootReducer = require('./reducers');
  //       store.replaceReducer(nextRootReducer);
  //     });
  //   }
  // }

  return store;
}
