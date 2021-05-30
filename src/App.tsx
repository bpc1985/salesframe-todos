import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Filter from "components/Filter";
import Input from "components/Input";
import TodoList from "components/TodoList";

import { loadTodos } from "redux/todoSlice";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
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
