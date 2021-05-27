import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Filter from "components/Filter";
import Input from "components/Input";
import TodoList from "components/TodoList";

import { loadTodos } from "redux/actions";
import { loadApiTodos } from "api/api";
import { TodoModel } from "types/types";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const data: TodoModel[] = await loadApiTodos();
      dispatch(loadTodos(data));
    };
    loadData();
  }, [dispatch]);

  return (
    <div className="container">
      <div className="todoApp">
        <div className="filter">
          <Input />
          <Filter />
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
