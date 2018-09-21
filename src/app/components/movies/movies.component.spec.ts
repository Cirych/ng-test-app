import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { APP_BASE_HREF } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { reducers } from 'src/app/reducers';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoviesComponent,
        FilterComponent,
        MovieItemComponent,
        MovieDetailComponent,
        NotFoundComponent
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        AppRoutingModule
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/movies' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
