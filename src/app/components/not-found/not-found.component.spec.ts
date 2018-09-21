import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { NotFoundComponent } from './not-found.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundComponent,
        MoviesComponent,
        MovieDetailComponent,
        MovieItemComponent,
        FilterComponent
      ],
      imports: [AppRoutingModule, ReactiveFormsModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
