import { takeEvery, put, all } from 'redux-saga/effects';
import { GameAction, incrementTries } from '../actions/';
import * as constants from '../constants/';

function* gameSequence(action: GameAction) {
  yield put(incrementTries());
}

export default function* root() {
  return yield all([takeEvery(constants.REVEAL_LOCATION, gameSequence)]);
}
