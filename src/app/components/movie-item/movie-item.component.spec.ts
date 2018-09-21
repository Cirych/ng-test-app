import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { MovieItemComponent } from './movie-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { GenreType } from '../../models/movie.model';

const testMovie = {
  id: 1,
  name: 'Test',
  rate: '2.5',
  key: 'test',
  description: 'desr',
  genres: ['action', 'adventure'] as GenreType[],
  length: '1h',
  img: 'url'
};

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieItemComponent,
        MoviesComponent,
        MovieDetailComponent,
        NotFoundComponent,
        FilterComponent
      ],
      imports: [ReactiveFormsModule, AppRoutingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    component.movie = testMovie;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
