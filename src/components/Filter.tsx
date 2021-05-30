import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETE } from "redux/constants";
import { setFilter } from "redux/actions";
import { RootState } from "types/types";

const Filter: FC = () => {
  const dispatch = useDispatch();
  const filter: string = useSelector(
    (state: RootState) => state.visibilityFilter
  );

  const onSetFilter = useCallback(
    (filter: string) => dispatch(setFilter(filter)),
    [dispatch]
  );

  return (
    <div>
      <button
        type="button"
        disabled={filter === FILTER_ALL}
        onClick={() => onSetFilter(FILTER_ALL)}
      >
        All
      </button>
      <button
        type="button"
        disabled={filter === FILTER_ACTIVE}
        onClick={() => onSetFilter(FILTER_ACTIVE)}
      >
        Active
      </button>
      <button
        type="button"
        disabled={filter === FILTER_COMPLETE}
        onClick={() => onSetFilter(FILTER_COMPLETE)}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
