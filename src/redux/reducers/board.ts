import { Game, GameStatus } from './../../types/index';
import * as actions from '../../redux/actions/';
import { minesweeper } from './../../minesweeper';

import {
  RESET_GAME,
  REVEAL_LOCATION,
  FLAG_LOCATION,
  INCREMENT_TRIES,
} from '../constants/index';

const defaultState = minesweeper.create({
  mineCount: 0,
  width: 1,
  height: 1,
});

export default function boardReducer(
  state: Game = defaultState,
  action: actions.GameAction
): Game {
  if (action.type === RESET_GAME) {
    return minesweeper.create(action.options);
  } else if (state.status !== GameStatus.Started) {
    return state;
  } else if (action.type === REVEAL_LOCATION) {
    return minesweeper.reveal(state, action.xy);
  } else if (action.type === FLAG_LOCATION) {
    return minesweeper.flag(state, action.xy);
  } else if (action.type === INCREMENT_TRIES) {
    return {
      ...state,
      moveCount: state.moveCount + 1,
    };
  }

  return state;
}
