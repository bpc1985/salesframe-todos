import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/actions";

import "./Input.scss";

const Input = () => {
  const dispatch = useDispatch();

  const onAddItem = useCallback(
    (item: string) => dispatch(addTodo(item)),
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
