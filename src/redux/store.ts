import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import gameSaga from './sagas/game';

import rootReducer from './reducers';

export default function configureStore(initialState?: any) {
  const sagaMiddleware = createSagaMiddleware();

  const internalStore = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(gameSaga);

  return internalStore;
}
