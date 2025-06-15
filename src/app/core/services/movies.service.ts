import { httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Credits } from '@core/models/credit.model';
import { ExternalIds } from '@core/models/external-ids.model';
import { MovieDetails } from '@core/models/movie-details.model';
import { Movie } from '@core/models/movie.model';
import { environment } from '@environments/environment';
import { LanguageService } from './language.service';
import { buildImageUrl, buildProfileImageUrl } from '@utils/image-url';

// Constants for better maintainability
const POSTER_SIZE = 'w300';
const CREW_JOBS_FILTER = ['producer', 'screenplay', 'novel', 'director'] as const;

type ApiResponse<T> = { results: T[] };

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly languageService = inject(LanguageService);
  private readonly currentLanguage = this.languageService.currentLanguage;
  private readonly apiUrl = environment.api.url;

  // Public signals
  readonly selectedMovieId = signal<number | null>(null);

  // Computed values
  private readonly movieEndpoint = computed(() =>
    this.selectedMovieId() ? `${this.apiUrl}/movie/${this.selectedMovieId()}` : null,
  );

  // Trending movies resources
  readonly trendingDayMovies = httpResource<Movie[]>(
    () => `${this.apiUrl}/trending/movie/day?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseMovieResults(data as ApiResponse<Movie>),
    },
  );

  readonly trendingWeekMovies = httpResource<Movie[]>(
    () => `${this.apiUrl}/trending/movie/week?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseMovieResults(data as ApiResponse<Movie>),
    },
  );

  // Movie list resources
  readonly upcomingMovies = httpResource<Movie[]>(
    () => `${this.apiUrl}/movie/upcoming?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseMovieResults(data as ApiResponse<Movie>),
    },
  );

  readonly nowPlayingMovies = httpResource<Movie[]>(
    () => `${this.apiUrl}/movie/now_playing?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseMovieResults(data as ApiResponse<Movie>),
    },
  );

  // Movie details resources
  readonly movieDetails = httpResource<MovieDetails | undefined>(
    () => {
      const endpoint = this.movieEndpoint();
      return endpoint ? `${endpoint}?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: undefined,
      parse: (data) => this.parseMovieDetails(data as MovieDetails),
    },
  );

  readonly movieExternalIds = httpResource<ExternalIds | undefined>(
    () => {
      const endpoint = this.movieEndpoint();
      return endpoint ? `${endpoint}/external_ids` : undefined;
    },
    {
      defaultValue: undefined,
    },
  );

  readonly movieCredits = httpResource<Credits | undefined>(
    () => {
      const endpoint = this.movieEndpoint();
      return endpoint ? `${endpoint}/credits` : undefined;
    },
    {
      defaultValue: undefined,
      parse: (data) => this.parseCredits(data as Credits),
    },
  );

  readonly movieRecommendations = httpResource<Movie[]>(
    () => {
      const endpoint = this.movieEndpoint();
      return endpoint ? `${endpoint}/recommendations?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: [],
      parse: (data) => this.parseMovieResults(data as ApiResponse<Movie>),
    },
  );

  readonly movieSimilar = httpResource<Movie[]>(
    () => {
      const endpoint = this.movieEndpoint();
      return endpoint ? `${endpoint}/similar?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: [],
      parse: (data) => this.parseMovieResults(data as ApiResponse<Movie>),
    },
  );

  // Public methods
  setSelectedMovieId(id: number | null): void {
    this.selectedMovieId.set(id);
  }

  // Private parsing methods
  private parseMovieResults(data: ApiResponse<Movie>): Movie[] {
    return data.results.map((movie) => ({
      ...movie,
      poster_path: buildImageUrl(movie.poster_path, POSTER_SIZE),
    }));
  }

  private parseMovieDetails(details: MovieDetails): MovieDetails {
    return {
      ...details,
      production_companies_names: details.production_companies?.map((company) => company.name).join(', ') ?? '',
      production_countries_names: details.production_countries?.map((country) => country.name).join(', ') ?? '',
    };
  }

  private parseCredits(credits: Credits): Credits {
    const normalizedCast =
      credits.cast?.map((actor) => ({
        ...actor,
        profile_path: buildProfileImageUrl(actor.profile_path),
      })) ?? [];

    const filteredAndNormalizedCrew =
      credits.crew
        ?.filter((crew) => CREW_JOBS_FILTER.includes(crew.job.toLowerCase() as (typeof CREW_JOBS_FILTER)[number]))
        .map((crew) => ({
          ...crew,
          job: crew.job.toLowerCase(),
          profile_path: buildProfileImageUrl(crew.profile_path),
        }))
        .sort((a, b) => a.job.localeCompare(b.job)) ?? [];

    return {
      ...credits,
      cast: normalizedCast,
      crew: filteredAndNormalizedCrew,
    };
  }
}
