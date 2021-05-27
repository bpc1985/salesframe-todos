import { combineReducers } from "redux";
import todoItems from "./todoItemsReducer";
import visibilityFilter from "./filterReducer";

export default combineReducers({
  todoItems,
  visibilityFilter,
});
