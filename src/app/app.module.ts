import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppComponent } from 'src/app/app.component';
import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { MovieItemComponent } from 'src/app/components/movie-item/movie-item.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

import { environment } from 'src/environments/environment';
import { reducers } from 'src/app/reducers';

@NgModule({
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
    StoreDevtoolsModule.instrument({
      name: 'NgRx Movies Store App',
      maxAge: 25,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
