import { FC, useState } from "react";
import { TodoModel } from "types/types";

import "./TodoItem.scss";
import "./Input.scss";

interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
  onEditItem: (updatedTodo: TodoModel) => void;
  onToggleItem: (updatedTodo: TodoModel) => void;
  onDeleteItem: (id: string) => void;
}

export const TodoItem: FC<ITodoItem> = ({
  id,
  text,
  completed,
  onEditItem,
  onToggleItem,
  onDeleteItem,
}: ITodoItem) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(text);

  const updateTodoHandler = async (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    if (e.key === "Enter") {
      if (newText && newText.trim().length > 0) {
        const updatedTodo: TodoModel = { id, text: newText, completed };
        onEditItem(updatedTodo);
      } else {
        setNewText(text);
      }
      setIsEdit(false);
    }
  };

  const toggleTodoHandler = async (id: string) => {
    const updatedTodo: TodoModel = { id, text: newText, completed: !completed };
    onToggleItem(updatedTodo);
  };

  const deleteTodoHandler = async (id: string) => {
    onDeleteItem(id);
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
