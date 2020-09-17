export interface Todo {
  index: number;
  name: string;
  done: boolean;
}
export type TodoState = {
  todos: Todo[];
};

export const SUBMIT_TODOS_REQUEST = 'SUBMIT_TODOS_REQUEST';
export const SUBMIT_TODOS_SUCCESS = 'SUBMIT_TODOS_SUCCESS';
