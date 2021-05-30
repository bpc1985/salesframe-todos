import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum VisibilityFilter {
  FILTER_ALL = "FILTER_ALL",
  FILTER_ACTIVE = "FILTER_ACTIVE",
  FILTER_COMPLETE = "FILTER_COMPLETE",
}

const initialState = VisibilityFilter.FILTER_ALL;

const filterSlice = createSlice({
  name: "visibilityFilter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<VisibilityFilter>) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
