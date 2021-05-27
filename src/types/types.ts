import {
  LOAD_TODOS,
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_FILTER,
} from "redux/constants";

import rootReducer from "redux/rootReducer";

export interface TodoModel {
  id: string;
  text: string;
  completed: boolean;
}

export interface LoadTodosAction {
  type: typeof LOAD_TODOS;
  responseData: TodoModel[];
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  nextId: string;
  value: string;
}

export interface EditTodoAction {
  type: typeof EDIT_TODO;
  id: string;
  newValue: string;
}

export interface ToggleAction {
  type: typeof TOGGLE_TODO;
  id: string;
}

export interface DeleteAction {
  type: typeof DELETE_TODO;
  id: string;
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  value: string;
}

export type TodoActionTypes =
  | LoadTodosAction
  | AddTodoAction
  | EditTodoAction
  | ToggleAction
  | DeleteAction
  | SetFilterAction;

export type RootState = ReturnType<typeof rootReducer>;
