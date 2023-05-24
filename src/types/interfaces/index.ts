export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  subtask: Todo[];
}

export interface IModalState {
  sampleModalOpen: boolean;
}

export interface ITodoState {
  todos: Todo[];
}
