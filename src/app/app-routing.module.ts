import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from 'src/app/components/movies/movies.component';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

import { MovieExistsGuard } from 'src/app/guards/movie-exists.guard';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    canActivate: [MovieExistsGuard]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
