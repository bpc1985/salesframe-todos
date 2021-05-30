import rootReducer from "redux/rootReducer";

export interface TodoModel {
  id: string;
  text: string;
  completed: boolean;
}

export type RootState = ReturnType<typeof rootReducer>;
