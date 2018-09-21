import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/models/movie.model';
import { RootState, getMovieDetails } from 'src/app/reducers';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  movie$: Observable<Movie | undefined>;

  constructor(
    private location: Location,
    private store: Store<RootState>
  ) {
    this.movie$ = store.pipe(select(getMovieDetails));
  }

  goBack(): void {
    this.location.back();
  }

}
