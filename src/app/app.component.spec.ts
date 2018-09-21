import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from 'src/app/reducers';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MoviesComponent,
        MovieDetailComponent,
        MovieItemComponent,
        NotFoundComponent,
        FilterComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule.forRoot()
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/movies/' }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
