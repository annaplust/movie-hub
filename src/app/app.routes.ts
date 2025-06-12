import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'search/:phrase',
    loadComponent: () =>
      import('./features/search-results/search-results.component').then((m) => m.SearchResultsComponent),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./features/movies/movie-details/movie-details.component').then((m) => m.MovieDetailsComponent),
  },
  {
    path: 'tv/:id',
    loadComponent: () =>
      import('./features/tv-shows/tv-show-details/tv-show-details.component').then((m) => m.TvShowDetailsComponent),
  },
  {
    path: 'person/:id',
    loadComponent: () =>
      import('./features/people/actor-details/actor-details.component').then((m) => m.ActorDetailsComponent),
  },
];
