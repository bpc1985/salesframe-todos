import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "redux/actions";

import "./TodoItem.scss";
import "./Input.scss";

export interface ITodoItem {
  id: string;
  text: string;
  complete: boolean;
  onToggleClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
}

export const TodoItem = ({
  id,
  text,
  complete,
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

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    if (e.key === "Enter") {
      if (newText && newText.trim().length > 0) {
        onEditItem(newText);
      } else {
        setNewText(text);
      }
      setIsEdit(false);
    }
  };

  return (
    <div className="todo">
      {!isEdit && (
        <>
          <div
            className="ml-2"
            style={{ textDecoration: complete ? "line-through" : "none" }}
            onClick={() => onToggleClick(id)}
          >
            {newText}
          </div>
          <div>
            <button className="button" onClick={() => onToggleClick(id)}>
              {complete ? "Undo" : "Done"}
            </button>
            <button className="button" onClick={() => setIsEdit(true)}>
              Edit
            </button>
            <button className="button" onClick={() => onDeleteClick(id)}>
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
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};
