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

  const partialResult = yield call(() => firebase.database().ref('/').once('value')
    .then(snapshot => snapshot.val())
  );

  const result = yield call((res) => {
    const promises = res.trips.map(value => firebase.storage()
      .ref(`/Travel/TopImages/${value.topImageName}`).getDownloadURL()
    );

    return Promise.all(promises).then(urls => {
      const newTrips = partialResult.trips.map((value, index) => {
        const newValue = value;
        newValue.topImage = urls[index];
        return newValue;
      });
      partialResult.trips = newTrips;
      return partialResult;
    });
  }, partialResult);

  yield put({ type: APP_INIT_SUCCESS, result });
}

export function* appInit() {
  yield* takeEvery(APP_LOAD, performAppInit);
}
