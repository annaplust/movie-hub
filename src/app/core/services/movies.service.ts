import { Injectable, Signal, signal } from '@angular/core';
import { Movie } from '@core/models/movie.model';
import { environment } from '@environments/environment';
import { httpResource } from '@angular/common/http';
import { ScrollItem } from '@shared/components/horizontal-scroll-list/scroll-item.model';
import { MovieDetails } from '@core/models/movie-details.model';
import { CastMember, Credits } from '@core/models/credit.model';
import { ExternalIds } from '@core/models/external-ids.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  id = signal(null);

  trendingMoviesResource = httpResource<ScrollItem[]>(() => `${environment.api.url}/trending/movie/day`, {
    defaultValue: [],
    parse: (data) => {
      return (data as { results: Movie[] }).results.map((movie) => {
        return {
          imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
          name: movie.title,
          link: `/movie/${movie.id}`,
        };
      });
    },
  });

  upcomingMoviesResource = httpResource<ScrollItem[]>(() => `${environment.api.url}/movie/upcoming`, {
    defaultValue: [],
    parse: (data) => {
      return (data as { results: Movie[] }).results.map((movie) => {
        return {
          imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
          name: movie.title,
          link: `/movie/${movie.id}`,
        };
      });
    },
  });

  nowPlayingMoviesResource = httpResource<ScrollItem[]>(() => `${environment.api.url}/movie/now_playing`, {
    defaultValue: [],
    parse: (data) => {
      return (data as { results: Movie[] }).results.map((movie) => {
        return {
          imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
          name: movie.title,
          link: `/movie/${movie.id}`,
        };
      });
    },
  });

  movieDetailsResource = httpResource<MovieDetails>(() =>
    this.id() ? `${environment.api.url}/movie/${this.id()}` : undefined,
  );
  externalIdsResource = httpResource<ExternalIds>(() =>
    this.id() ? `${environment.api.url}/movie/${this.id()}/external_ids` : undefined,
  );

  castResource = httpResource<ScrollItem[]>(
    () => (this.id() ? `${environment.api.url}/movie/${this.id()}/credits` : undefined),
    {
      defaultValue: [],
      parse: (data) => {
        return (data as Credits).cast.slice(0, 9).map((actor) => {
          return {
            imageUrl: actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : null,
            name: actor.name,
            link: `/person/${actor.id}`,
          };
        });
      },
    },
  );

  recommendationsResource = httpResource<ScrollItem[]>(
    () => (this.id() ? `${environment.api.url}/movie/${this.id()}/recommendations` : undefined),
    {
      defaultValue: [],
      parse: (data) => {
        return (data as { results: Movie[] }).results.map((movie) => {
          return {
            imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
            name: movie.title,
            link: `/movie/${movie.id}`,
          };
        });
      },
    },
  );
}
