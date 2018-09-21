import { Action } from '@ngrx/store';
import { MoviesState } from 'src/app/reducers/movies.reducer';

export enum MoviesActionTypes {
  LoadMovies = 'LOAD_MOVIES'
}

export class LoadMovies implements Action {
  readonly type = MoviesActionTypes.LoadMovies;

  constructor(public payload: MoviesState) {}
}

export type MoviesActionsUnion = LoadMovies;
