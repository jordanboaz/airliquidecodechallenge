import {call, put, all, takeLatest} from 'redux-saga/effects';
import {submitTasks} from '../../services/checklistService';
import {submitTodosSuccess} from './actions';
import {SUBMIT_TODOS_REQUEST} from './types';

function* submitTodos() {
  const response = yield call(submitTasks);

  yield put(submitTodosSuccess(response));
}

export default all([takeLatest(SUBMIT_TODOS_REQUEST, submitTodos)]);
