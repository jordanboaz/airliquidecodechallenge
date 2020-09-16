export interface Todo {
  index: number;
  name: string;
  done: boolean;
}
export type TodoState = {
  todos: Todo[];
};
