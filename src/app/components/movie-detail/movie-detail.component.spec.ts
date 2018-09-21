import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { APP_BASE_HREF } from '@angular/common';

import { MovieDetailComponent } from './movie-detail.component';
import { reducers } from 'src/app/reducers';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieDetailComponent,
        MoviesComponent,
        NotFoundComponent,
        FilterComponent,
        MovieItemComponent
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        AppRoutingModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/movies/1' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
