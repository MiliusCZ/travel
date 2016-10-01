import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import firebase from 'firebase';

import * as reducers from 'reducers';
import sagas from 'sagas';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({ ...reducers, routing: routerReducer });

const config = {
  apiKey: 'AIzaSyDRUuywerDx07CpzPpNsfKMNuXHTw2yitE',
  authDomain: 'milos-turek-travel.firebaseapp.com',
  databaseURL: 'https://milos-turek-travel.firebaseio.com',
  storageBucket: 'milos-turek-travel.appspot.com',
  messagingSenderId: '72690935780'
};

firebase.initializeApp(config);

const sagaMiddleware = createSagaMiddleware();

export const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(sagas);

export default store;
