import {SUBMIT_TODOS_REQUEST, SUBMIT_TODOS_SUCCESS} from './types';

const submitTodosRequest = () => {
  return {
    type: SUBMIT_TODOS_REQUEST,
  };
};

const submitTodosSuccess = (data) => {
  console.log('success', data);
  return {
    type: SUBMIT_TODOS_SUCCESS,
    data,
  };
};

export {submitTodosRequest, submitTodosSuccess};
