import { ITodoState, Todo } from '@/types/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ITodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todoItem = state.todos.find((todo) => todo.id === action.payload);
      if (todoItem) {
        todoItem.completed = !todoItem.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
