import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { MovieExistsGuard } from './movie-exists.guard';
import { reducers } from 'src/app/reducers';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';

describe('MovieExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieDetailComponent,
        MoviesComponent,
        NotFoundComponent,
        FilterComponent,
        MovieItemComponent
      ],
      imports: [
        StoreModule.forRoot(reducers),
        AppRoutingModule,
        ReactiveFormsModule
      ],
      providers: [
        MovieExistsGuard,
        { provide: APP_BASE_HREF, useValue: '/movies/1' }
      ]
    });
  });

  it('should ...', inject([MovieExistsGuard], (guard: MovieExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
