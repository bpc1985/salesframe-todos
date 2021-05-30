import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, AppDispatch } from "./store";
import { TodoModel } from "types/types";
import {
  loadApiTodos,
  addApiTodo,
  updateApiTodo,
  deleteApiTodo,
} from "api/api";

const initialState: TodoModel[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodos(state, action: PayloadAction<TodoModel[]>) {
      return action.payload;
    },
    addTodo(state, action: PayloadAction<TodoModel>) {
      state.push(action.payload);
    },
    editTodo(state, action: PayloadAction<TodoModel>) {
      let todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.completed = action.payload.completed;
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      const newTodos: TodoModel[] = state.filter(
        (todo) => todo.id !== action.payload
      );
      return newTodos;
    },
  },
});

export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
  const todoList: TodoModel[] = await loadApiTodos();
  dispatch(todoSlice.actions.loadTodos(todoList));
};

export const addTodo =
  (text: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    const newTodo: TodoModel = await addApiTodo(text);
    dispatch(todoSlice.actions.addTodo(newTodo));
  };

export const editTodo =
  (updatedTodo: TodoModel): AppThunk =>
  async (dispatch: AppDispatch) => {
    await updateApiTodo(updatedTodo);
    dispatch(todoSlice.actions.editTodo(updatedTodo));
  };

export const toggleTodo = editTodo;

export const deleteTodo =
  (id: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    await deleteApiTodo(id);
    dispatch(todoSlice.actions.deleteTodo(id));
  };

export default todoSlice.reducer;
