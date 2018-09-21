import { GenreType } from 'src/app/models/movie.model';
import { FilterActions } from 'src/app/actions';

export interface FiltersState {
  name: string;
  genre: GenreType;
}

const initialState: FiltersState = {
  name: '',
  genre: '' as GenreType
};

// AOT: Consider changing the function expression into an exported function.
export function filtersReducer(
  state = initialState,
  action: FilterActions.FilterActionsUnion
): FiltersState {
  switch (action.type) {
    case FilterActions.FilterActionTypes.SetFilter:
      return { ...state, ...action.payload };
    case FilterActions.FilterActionTypes.ResetFilter:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
