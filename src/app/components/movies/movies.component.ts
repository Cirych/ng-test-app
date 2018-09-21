import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/models/movie.model';

import { RootState, getFilteredMovies } from 'src/app/reducers';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies$: Observable<Movie[]>;

  constructor(
    private store: Store<RootState>
    ) {
    this.movies$ = store.pipe(select(getFilteredMovies));
  }
}
