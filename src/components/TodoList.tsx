import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETE } from "redux/constants";
import { toggleTodo, deleteTodo } from "redux/actions";
import { TodoModel, RootState } from "types/types";

import { TodoItem } from "./TodoItem";

const getVisibleTodos = (todos: TodoModel[], filter: string): TodoModel[] => {
  switch (filter) {
    case FILTER_ALL: {
      return todos;
    }
    case FILTER_ACTIVE: {
      return todos.filter((c: TodoModel) => !c.completed);
    }
    case FILTER_COMPLETE: {
      return todos.filter((c: TodoModel) => c.completed);
    }
    default:
      return todos;
  }
};

const ToDoList = () => {
  const dispatch = useDispatch();

  const todoItems: TodoModel[] = useSelector((state: RootState) =>
    getVisibleTodos(state.todoItems, state.visibilityFilter)
  );

  const onToggleClick = useCallback(
    (id: string) => dispatch(toggleTodo(id)),
    [dispatch]
  );

  const onDeleteClick = useCallback(
    (id: string) => dispatch(deleteTodo(id)),
    [dispatch]
  );

  return (
    <div className="todoList">
      {todoItems.map((item: TodoModel) => (
        <TodoItem
          key={item.id}
          id={item.id}
          complete={item.completed}
          text={item.text}
          onToggleClick={onToggleClick}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default ToDoList;
