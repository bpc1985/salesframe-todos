import {
  LOAD_TODOS,
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
} from "./constants";

import { TodoActionTypes, TodoModel } from "types/types";

const initialState: TodoModel[] = [];

const todoItems = (
  state: TodoModel[] = initialState,
  action: TodoActionTypes
): TodoModel[] => {
  switch (action.type) {
    case LOAD_TODOS:
      return action.responseData;

    case ADD_TODO:
      return [
        ...state,
        { id: action.id, text: action.value, completed: false },
      ];

    case EDIT_TODO:
      return state.map((todo: TodoModel) =>
        todo.id === action.id ? { ...todo, value: action.newValue } : todo
      );

    case TOGGLE_TODO:
      return state.map((todo: TodoModel) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case DELETE_TODO:
      return state.filter((todo: TodoModel) => todo.id !== action.id);
  }
  return state;
};

export default todoItems;
