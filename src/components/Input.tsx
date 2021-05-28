import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addApiTodo } from "api/api";
import { addTodo } from "redux/actions";

import "./Input.scss";

const Input: FC = () => {
  const dispatch = useDispatch();

  const onAddItem = useCallback(
    async (item: string) => {
      const id: string = uuidv4();
      await addApiTodo({ id, text: item, completed: false });
      dispatch(addTodo(id, item));
    },
    [dispatch]
  );

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      if (value && value.trim().length > 0) {
        onAddItem(e.target.value);
      }
      e.target.value = "";
    }
  };

  return (
    <input
      type="text"
      className="input"
      onKeyDown={handleKeyDown}
      placeholder="Add todo and press Enter"
    />
  );
};

export default Input;
