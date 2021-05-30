import { combineReducers } from "redux";
import todos from "./todoSlice";
import visibilityFilter from "./filterSlice";

export default combineReducers({
  todos,
  visibilityFilter,
});
