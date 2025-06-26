import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'search/:phrase',
    loadComponent: () =>
      import('./features/search-results/search-results.component').then((m) => m.SearchResultsComponent),
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./features/movies/movies-overview/movies-overview.component').then((m) => m.MoviesOverviewComponent),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./features/movies/movie-details/movie-details.component').then((m) => m.MovieDetailsComponent),
  },
  {
    path: 'tv',
    loadComponent: () =>
      import('./features/tv-shows/tv-shows-overview/tv-shows-overview.component').then(
        (m) => m.TvShowsOverviewComponent,
      ),
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
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
];
