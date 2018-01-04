import { combineReducers } from 'redux';
import boardReducer from './board';
import { StoreState } from '../../types/index';

const appReducer = combineReducers({
  board: boardReducer,
});

const rootReducer = (state: StoreState, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
