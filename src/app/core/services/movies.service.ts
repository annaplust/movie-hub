import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CastMember, Credits } from '@core/models/credit.model';
import { ExternalIds } from '@core/models/external-ids.model';
import { MovieDetails } from '@core/models/movie-details.model';
import { Movie } from '@core/models/movie.model';
import { environment } from '@environments/environment';

const keywords = ['producer', 'screenplay', 'novel', 'director'];

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  id = signal(null);

  trendingDayMoviesResource = httpResource<Movie[]>(() => `${environment.api.url}/trending/movie/day`, {
    defaultValue: [],
    parse: (data) => {
      (data as { results: Movie[] }).results.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
      });
      return (data as { results: Movie[] }).results;
    },
  });

  trendingWeekMoviesResource = httpResource<Movie[]>(() => `${environment.api.url}/trending/movie/week`, {
    defaultValue: [],
    parse: (data) => {
      return (data as { results: Movie[] }).results;
    },
  });

  upcomingMoviesResource = httpResource<Movie[]>(() => `${environment.api.url}/movie/upcoming`, {
    defaultValue: [],
    parse: (data) => {
      (data as { results: Movie[] }).results.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
      });
      return (data as { results: Movie[] }).results;
    },
  });

  nowPlayingMoviesResource = httpResource<Movie[]>(() => `${environment.api.url}/movie/now_playing`, {
    defaultValue: [],
    parse: (data) => {
      (data as { results: Movie[] }).results.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
      });
      return (data as { results: Movie[] }).results;
    },
  });

  movieDetailsResource = httpResource<MovieDetails>(
    () => (this.id() ? `${environment.api.url}/movie/${this.id()}` : undefined),
    {
      defaultValue: undefined,
      parse: (data) => {
        const details = data as MovieDetails;
        details.production_companies_names = details.production_companies.map((c) => c.name).join(', ');
        details.production_countries_names = details.production_countries.map((c) => c.name).join(', ');
        return data as MovieDetails;
      },
    },
  );

  externalIdsResource = httpResource<ExternalIds>(() =>
    this.id() ? `${environment.api.url}/movie/${this.id()}/external_ids` : undefined,
  );

  creditsResource = httpResource<Credits>(
    () => (this.id() ? `${environment.api.url}/movie/${this.id()}/credits` : undefined),
    {
      defaultValue: undefined,
      parse: (data) => {
        (data as Credits).cast.forEach((actor) => {
          actor.profile_path = `https://media.themoviedb.org/t/p/w120_and_h133_face/${actor.profile_path}`;
        });
        (data as Credits).crew = (data as Credits).crew.filter((crew) => keywords.includes(crew.job.toLowerCase()));
        (data as Credits).crew.forEach((actor) => {
          actor.profile_path = `https://media.themoviedb.org/t/p/w120_and_h133_face/${actor.profile_path}`;
        });
        return data as Credits;
      },
    },
  );

  recommendationsResource = httpResource<Movie[]>(
    () => (this.id() ? `${environment.api.url}/movie/${this.id()}/recommendations` : undefined),
    {
      defaultValue: [],
      parse: (data) => {
        (data as { results: Movie[] }).results.forEach((movie) => {
          movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
        });
        return (data as { results: Movie[] }).results;
      },
    },
  );
}
