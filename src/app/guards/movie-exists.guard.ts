import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { RootState, getMoviesState } from 'src/app/reducers';

@Injectable({
  providedIn: 'root'
})
export class MovieExistsGuard implements CanActivate {
  constructor(
    private store: Store<RootState>,
    private router: Router
  ) {}

  canActivate({ params }: ActivatedRouteSnapshot): Observable<boolean> {
    const routeId = Number(params['id']);
    return this.store.pipe(
      select(getMoviesState),
      map(({ movies }) => movies.find(({ id }) => id === routeId)),
      map(Boolean),
      tap(result => !result && this.router.navigate(['/404']))
    );
  }
}
