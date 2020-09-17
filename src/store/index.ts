import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import {todoReducer as todos} from './todos/reducers';
import {TodoState, TodoActionTypes} from './todos/types';
type StoreActions = TodoActionTypes;

interface StoreState {
  todos: TodoState;
}

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export function useDispatch() {
  const dispatch = _useDispatch();
  return (action: StoreActions) => {
    dispatch(action);
  };
}

export const useSelector: TypedUseSelectorHook<StoreState> = _useSelector;

export {store};
