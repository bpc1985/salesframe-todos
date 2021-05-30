import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editTodo, toggleTodo, deleteTodo } from "redux/todoSlice";
import { VisibilityFilter } from "redux/filterSlice";
import { TodoModel, RootState } from "types/types";

import { TodoItem } from "./TodoItem";

const getVisibleTodos = (todos: TodoModel[], filter: string): TodoModel[] => {
  switch (filter) {
    case VisibilityFilter.FILTER_ALL:
      return todos;
    case VisibilityFilter.FILTER_COMPLETE:
      return todos.filter((t) => t.completed);
    case VisibilityFilter.FILTER_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const ToDoList: FC = () => {
  const dispatch = useDispatch();

  const todoItems: TodoModel[] = useSelector((state: RootState) =>
    getVisibleTodos(state.todos, state.visibilityFilter)
  );

  const onEditItem = useCallback(
    (updatedTodo: TodoModel) => dispatch(editTodo(updatedTodo)),
    [dispatch]
  );

  const onToggleItem = useCallback(
    (updatedTodo: TodoModel) => dispatch(toggleTodo(updatedTodo)),
    [dispatch]
  );

  const onDeleteItem = useCallback(
    (id: string) => dispatch(deleteTodo(id)),
    [dispatch]
  );

  return (
    <div className="todoList">
      {todoItems.map((item: TodoModel) => (
        <TodoItem
          key={item.id}
          id={item.id}
          completed={item.completed}
          text={item.text}
          onEditItem={onEditItem}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default ToDoList;
