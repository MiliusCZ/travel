import { fork } from 'redux-saga/effects';
import { appInit } from './app';

export default function* sagas() {
  yield [
    fork(appInit)
  ];
}
