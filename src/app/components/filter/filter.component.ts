import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';

import { genreType } from 'src/app/models/movie.model';
import { RootState } from 'src/app/reducers';
import { FiltersState } from 'src/app/reducers/filters.reducer';
import { FilterActions } from 'src/app/actions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  genres = Object.keys(genreType);
  filters = this.fb.group({
    name: [''],
    genre: ['']
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<RootState>
    ) {
    store
      .pipe(
        select('filters')
      )
      .subscribe(this.setFilter);

    this.filters.valueChanges
      .pipe<FiltersState>(
        debounceTime(300)
      )
      .subscribe(this.updateState);
  }

  private setFilter = (state: FiltersState) => {
    this.filters.patchValue(state, {emitEvent: false});
  }

  private updateState = (values: FiltersState) => {
    this.store.dispatch(new FilterActions.SetFilter(values));
  }

  resetFilter() {
    this.store.dispatch(new FilterActions.ResetFilter());
  }
}
