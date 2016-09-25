import { APP_LOAD } from 'constants/action-types';

import { fork } from 'redux-saga/effects';
import { appInit } from './app';
import { put } from 'redux-saga/effects';

export default function* sagas() {
  yield [
    fork(appInit)
  ];

  //yield put({ type: APP_LOAD });
}
