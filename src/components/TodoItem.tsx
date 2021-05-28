import { FC, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "redux/actions";
import { updateApiTodo, deleteApiTodo } from "api/api";

import "./TodoItem.scss";
import "./Input.scss";

export interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  onToggleClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
}

export const TodoItem: FC<ITodoItem> = ({
  id,
  text,
  completed,
  onToggleClick,
  onDeleteClick,
}: ITodoItem) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(text);

  const dispatch = useDispatch();

  const onEditItem = useCallback(
    (newValue: string) => dispatch(editTodo(id, newValue)),
    [dispatch, id]
  );

  const updateTodoHandler = async (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    if (e.key === "Enter") {
      if (newText && newText.trim().length > 0) {
        await updateApiTodo({ id, text: newText, completed });
        onEditItem(newText);
      } else {
        setNewText(text);
      }
      setIsEdit(false);
    }
  };

  const toggleTodoHandler = async (id: string) => {
    await updateApiTodo({ id, text, completed: !completed });
    onToggleClick(id);
  };

  const deleteTodoHandler = async (id: string) => {
    await deleteApiTodo(id);
    onDeleteClick(id);
  };

  return (
    <div className="todo">
      {!isEdit && (
        <>
          <div
            className="ml-2"
            style={{ textDecoration: completed ? "line-through" : "none" }}
            onClick={() => toggleTodoHandler(id)}
          >
            {newText}
          </div>
          <div>
            <button className="button" onClick={() => toggleTodoHandler(id)}>
              {completed ? "Undo" : "Done"}
            </button>
            <button className="button" onClick={() => setIsEdit(true)}>
              Edit
            </button>
            <button className="button" onClick={() => deleteTodoHandler(id)}>
              Delete
            </button>
          </div>
        </>
      )}

      {isEdit && (
        <input
          type="text"
          className="input"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={updateTodoHandler}
        />
      )}
    </div>
  );
};
