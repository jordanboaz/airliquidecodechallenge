import {TodoState} from './types';

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state = initialState, action): TodoState {
  return state;
}
