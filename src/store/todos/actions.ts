import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  SUBMIT_TODOS_REQUEST,
  SUBMIT_TODOS_SUCCESS,
  TOGGLE_TODO,
  Todo,
} from './types';

const submitTodosRequest = () => {
  return {
    type: SUBMIT_TODOS_REQUEST,
  };
};

const submitTodosSuccess = (data: Todo['name'][]) => {
  return {
    type: SUBMIT_TODOS_SUCCESS,
    payload: data,
  };
};

const addTodoRequest = (name: Todo['name']) => {
  return {
    type: ADD_TODO_REQUEST,
    payload: name,
  };
};

const addTodoSuccess = (todo: Todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo,
  };
};

const toggleTodo = (name: Todo['name']) => {
  return {
    type: TOGGLE_TODO,
    payload: name,
  };
};

export {
  submitTodosRequest,
  submitTodosSuccess,
  toggleTodo,
  addTodoRequest,
  addTodoSuccess,
};
