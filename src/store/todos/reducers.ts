import {
  ADD_TODO_SUCCESS,
  SUBMIT_TODOS_SUCCESS,
  TodoState,
  TOGGLE_TODO,
  TodoActionTypes,
} from './types';

const initialState: TodoState = [];

export function todoReducer(
  state = initialState,
  action: TodoActionTypes,
): TodoState {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return [...state, action.payload];
    case TOGGLE_TODO:
      const todoIndex = state.findIndex((todo) => todo.name === action.payload);
      if (todoIndex !== -1) {
        const newState = [...state];
        newState[todoIndex].status =
          newState[todoIndex].status === 'checked' ? 'unchecked' : 'checked';
        return newState;
      }
      return state;

    case SUBMIT_TODOS_SUCCESS:
      return state.map((todo) => {
        if (action.payload.includes(todo.name)) {
          todo.status = 'sent';
        }
        return todo;
      });

    default:
      return state;
  }
}
