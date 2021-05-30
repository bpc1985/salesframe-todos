import { createStore, applyMiddleware } from "redux";
import { Action } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from "types/types";
import rootReducer from "./rootReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
