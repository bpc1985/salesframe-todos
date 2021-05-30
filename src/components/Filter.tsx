import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, VisibilityFilter } from "redux/filterSlice";
import { RootState } from "types/types";

interface IFilterButton {
  text: string;
  visibilityFilter: VisibilityFilter;
}

const FilterButton: FC<IFilterButton> = ({ text, visibilityFilter }) => {
  const dispatch = useDispatch();

  const currentFilter: VisibilityFilter = useSelector(
    (state: RootState) => state.visibilityFilter
  );

  const onSetFilter = useCallback(
    (filterStr: VisibilityFilter) => dispatch(setFilter(filterStr)),
    [dispatch]
  );

  return (
    <button
      disabled={currentFilter === visibilityFilter}
      onClick={() => dispatch(onSetFilter(visibilityFilter))}
    >
      {text}
    </button>
  );
};

const Filter: FC = () => (
  <div>
    <FilterButton visibilityFilter={VisibilityFilter.FILTER_ALL} text="All" />
    <FilterButton
      visibilityFilter={VisibilityFilter.FILTER_ACTIVE}
      text="Active"
    />
    <FilterButton
      visibilityFilter={VisibilityFilter.FILTER_COMPLETE}
      text="Completed"
    />
  </div>
);

export default Filter;
