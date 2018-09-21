import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import {
  routerReducer as router,
  RouterReducerState
} from '@ngrx/router-store';

import { filtersReducer as filters, FiltersState } from './filters.reducer';
import { moviesReducer as movies, MoviesState } from './movies.reducer';

export interface RootState {
  router: RouterReducerState;
  filters: FiltersState;
  movies: MoviesState;
}

export const reducers: ActionReducerMap<RootState, any> = {
  router,
  filters,
  movies
};

const getRouterState = createFeatureSelector<RootState, RouterReducerState>('router');
const getFiltersState = createFeatureSelector<RootState, FiltersState>('filters');
export const getMoviesState = createFeatureSelector<RootState, MoviesState>('movies');

export const getFilteredMovies = createSelector(
  getMoviesState,
  getFiltersState,
  ({ movies }, { name: search, genre }) =>
    movies.filter(
      ({ name, genres }) =>
        (!search || name.toLowerCase().includes(search.toLowerCase()))
        &&
        (!genre || genres.includes(genre))
    )
);

export const getMovieDetails = createSelector(
  getMoviesState,
  getRouterState,
  ({ movies }, { state }) =>
    movies.find(({ id }) => id === Number(state.root.firstChild!.params.id))
);
