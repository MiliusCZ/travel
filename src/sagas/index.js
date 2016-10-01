// import { APP_LOAD } from 'constants/action-types';

import { fork/* , put*/ } from 'redux-saga/effects';
import { appInit } from './app';

export default function* sagas() {
  yield [
    fork(appInit)
  ];

  // yield put({ type: APP_LOAD });
}
