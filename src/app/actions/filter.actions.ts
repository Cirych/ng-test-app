import { Action } from '@ngrx/store';
import { FiltersState } from 'src/app/reducers/filters.reducer';

export enum FilterActionTypes {
  SetFilter = 'SET_FILTER',
  ResetFilter = 'RESET_FILTER'
}

export class SetFilter implements Action {
  readonly type = FilterActionTypes.SetFilter;

  constructor(public payload: FiltersState) {}
}

export class ResetFilter implements Action {
  readonly type = FilterActionTypes.ResetFilter;
}

export type FilterActionsUnion = SetFilter | ResetFilter;
