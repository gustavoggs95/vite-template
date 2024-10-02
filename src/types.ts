export interface TQuery {
  id: number;
  node_id: string;
  name: string;
}
export interface TodoItem {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface TodosAll {
  todos: TodoItem[];
}
