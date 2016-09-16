import {
  APP_LOAD,
  APP_INIT_REQUEST,
  APP_INIT_SUCCESS
} from 'constants/action-types';

import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import firebase from 'firebase';

export function* performAppInit() {
  yield put({ type: APP_INIT_REQUEST });

  const result = yield call(() => firebase.database().ref('/').once('value')
    .then(snapshot => snapshot.val())
  );

  yield put({ type: APP_INIT_SUCCESS, result });
}

export function* appInit() {
  yield* takeEvery(APP_LOAD, performAppInit);
}
