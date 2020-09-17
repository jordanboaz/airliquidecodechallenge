export interface Todo {
  name: string;
  status: 'checked' | 'unchecked' | 'sent';
}
export type TodoState = Todo[];

export const SUBMIT_TODOS_REQUEST = 'SUBMIT_TODOS_REQUEST';
export const SUBMIT_TODOS_SUCCESS = 'SUBMIT_TODOS_SUCCESS';
export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface SubmitTodosRequestAction {
  type: typeof SUBMIT_TODOS_REQUEST;
}

interface SubmitTodosSuccessAction {
  type: typeof SUBMIT_TODOS_SUCCESS;
  payload: Todo['name'][];
}
interface ToggleTodoAction {
  type: typeof ADD_TODO_REQUEST;
  payload: Todo['name'];
}
interface AddTodoRequestAction {
  type: typeof ADD_TODO_SUCCESS;
  payload: Todo;
}
interface AddTodoSuccessAction {
  type: typeof TOGGLE_TODO;
  payload: Todo['name'];
}
export type TodoActionTypes =
  | SubmitTodosRequestAction
  | SubmitTodosSuccessAction
  | ToggleTodoAction
  | AddTodoRequestAction
  | AddTodoSuccessAction;
