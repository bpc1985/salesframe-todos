import { TodoActionTypes, TodoModel } from "types/types";

import {
  LOAD_TODOS,
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_FILTER,
} from "./constants";

export const loadTodos = (responseData: TodoModel[]): TodoActionTypes => {
  return {
    type: LOAD_TODOS,
    responseData,
  };
};

export const addTodo = (id: string, value: string): TodoActionTypes => ({
  type: ADD_TODO,
  id,
  value,
});

export const editTodo = (id: string, newValue: string): TodoActionTypes => ({
  type: EDIT_TODO,
  id,
  newValue,
});

export const toggleTodo = (id: string): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id: string): TodoActionTypes => ({
  type: DELETE_TODO,
  id,
});

export const setFilter = (filter: string): TodoActionTypes => ({
  type: SET_FILTER,
  value: filter,
});
