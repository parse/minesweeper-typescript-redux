import { takeEvery, put, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { GameAction, incrementTries } from '../actions/';

// import { StoreState } from '../../types/index';

import * as constants from '../constants/';

function* gameSequence(action: GameAction) {
  yield put(incrementTries());
  yield call(delay, 1000);
}

export default function* root() {
  return yield all([takeEvery(constants.REVEAL_LOCATION, gameSequence)]);
}
