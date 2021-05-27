import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETE } from "redux/constants";
import { setFilter } from "redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const onSetFilter = useCallback(
    (filter: string) => dispatch(setFilter(filter)),
    [dispatch]
  );

  return (
    <div>
      <button type="button" onClick={() => onSetFilter(FILTER_ALL)}>
        All
      </button>
      <button type="button" onClick={() => onSetFilter(FILTER_ACTIVE)}>
        Active
      </button>
      <button type="button" onClick={() => onSetFilter(FILTER_COMPLETE)}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
