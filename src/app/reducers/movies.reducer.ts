import { Movie } from 'src/app/models/movie.model';
import movies from 'src/assets/movies.json';
import { MoviesActions } from 'src/app/actions';

export interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies
};

// AOT: Consider changing the function expression into an exported function.
export function moviesReducer(
  state = initialState,
  action: MoviesActions.MoviesActionsUnion
): MoviesState {
  switch (action.type) {
    case MoviesActions.MoviesActionTypes.LoadMovies:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
