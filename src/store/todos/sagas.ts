import {
  call,
  put,
  select,
  all,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import {submitTasks} from '../../services/checklistService';
import {submitTodosSuccess, addTodoSuccess} from './actions';
import {SUBMIT_TODOS_REQUEST, ADD_TODO_REQUEST, TodoActionTypes} from './types';

function* submitTodos() {
  const todosDone = yield select((state) =>
    state.todos.filter((todo) => todo.status === 'checked'),
  );
  const response = yield call(submitTasks, todosDone);

  yield put(submitTodosSuccess(response));
}

function* addTodo({payload}) {
  const todoExists = yield select((state) =>
    state.todos.find((todo) => todo.name === payload.name),
  );

  if (!todoExists) {
    const newTodo = {name: payload.name, status: 'unchecked'};
    yield put(addTodoSuccess(newTodo));
  }
}

export default all([
  takeEvery(ADD_TODO_REQUEST, addTodo),
  takeLatest(SUBMIT_TODOS_REQUEST, submitTodos),
]);
