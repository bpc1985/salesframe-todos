import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addApiTodo } from "api/api";
import { addTodo } from "redux/actions";

import "./Input.scss";

const Input: FC = () => {
  const dispatch = useDispatch();

  const onAddItem = useCallback(
    async (text: string) => {
      const newTodo = await addApiTodo(text);
      return dispatch(addTodo(newTodo));
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
