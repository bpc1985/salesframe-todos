import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/todoSlice";

import "./Input.scss";

const Input: FC = () => {
  const dispatch = useDispatch();

  const onAddItem = useCallback(
    async (text: string) => dispatch(addTodo(text)),
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
