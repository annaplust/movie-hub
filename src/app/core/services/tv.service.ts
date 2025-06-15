import { httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Credits } from '@core/models/credit.model';
import { ExternalIds } from '@core/models/external-ids.model';
import { TvShowDetails } from '@core/models/tv-details.model';
import { TvShow } from '@core/models/tv-show.model';
import { environment } from '@environments/environment';
import { LanguageService } from './language.service';
import { buildImageUrl, buildProfileImageUrl } from '@utils/image-url';

// Constants for better maintainability
const POSTER_SIZE = 'w300';
const CREW_JOBS_FILTER = ['producer', 'screenplay', 'novel', 'director', 'creator', 'executive producer'] as const;

type ApiResponse<T> = { results: T[] };

@Injectable({
  providedIn: 'root',
})
export class TvService {
  private readonly languageService = inject(LanguageService);
  private readonly currentLanguage = this.languageService.currentLanguage;
  private readonly apiUrl = environment.api.url;

  // Public signals
  readonly selectedTvShowId = signal<number | null>(null);

  // Computed values
  private readonly tvShowEndpoint = computed(() =>
    this.selectedTvShowId() ? `${this.apiUrl}/tv/${this.selectedTvShowId()}` : null,
  );

  // Trending TV shows resources
  readonly trendingDayTvShows = httpResource<TvShow[]>(
    () => `${this.apiUrl}/trending/tv/day?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  readonly trendingWeekTvShows = httpResource<TvShow[]>(
    () => `${this.apiUrl}/trending/tv/week?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  // TV show list resources
  readonly popularTvShows = httpResource<TvShow[]>(
    () => `${this.apiUrl}/tv/popular?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  readonly topRatedTvShows = httpResource<TvShow[]>(
    () => `${this.apiUrl}/tv/top_rated?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  readonly onTheAirTvShows = httpResource<TvShow[]>(
    () => `${this.apiUrl}/tv/on_the_air?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  readonly airingTodayTvShows = httpResource<TvShow[]>(
    () => `${this.apiUrl}/tv/airing_today?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  // TV show details resources
  readonly tvShowDetails = httpResource<TvShowDetails | undefined>(
    () => {
      const endpoint = this.tvShowEndpoint();
      return endpoint ? `${endpoint}?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: undefined,
      parse: (data) => this.parseTvShowDetails(data as TvShowDetails),
    },
  );

  readonly tvShowExternalIds = httpResource<ExternalIds | undefined>(
    () => {
      const endpoint = this.tvShowEndpoint();
      return endpoint ? `${endpoint}/external_ids` : undefined;
    },
    {
      defaultValue: undefined,
    },
  );

  readonly tvShowCredits = httpResource<Credits | undefined>(
    () => {
      const endpoint = this.tvShowEndpoint();
      return endpoint ? `${endpoint}/credits` : undefined;
    },
    {
      defaultValue: undefined,
      parse: (data) => this.parseCredits(data as Credits),
    },
  );

  readonly tvShowRecommendations = httpResource<TvShow[]>(
    () => {
      const endpoint = this.tvShowEndpoint();
      return endpoint ? `${endpoint}/recommendations?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  readonly tvShowSimilar = httpResource<TvShow[]>(
    () => {
      const endpoint = this.tvShowEndpoint();
      return endpoint ? `${endpoint}/similar?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  readonly similarTvShows = httpResource<TvShow[]>(
    () => {
      const endpoint = this.tvShowEndpoint();
      return endpoint ? `${endpoint}/similar?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: [],
      parse: (data) => this.parseTvShowResults(data as ApiResponse<TvShow>),
    },
  );

  // Public methods
  setSelectedTvShowId(id: number | null): void {
    this.selectedTvShowId.set(id);
  }

  // Private parsing methods
  private parseTvShowResults(data: ApiResponse<TvShow>): TvShow[] {
    return data.results.map((show) => ({
      ...show,
      poster_path: buildImageUrl(show.poster_path, POSTER_SIZE),
      backdrop_path: buildImageUrl(show.backdrop_path, 'w1280'),
    }));
  }

  private parseTvShowDetails(details: TvShowDetails): TvShowDetails {
    return {
      ...details,
      poster_path: buildImageUrl(details.poster_path, POSTER_SIZE),
      backdrop_path: buildImageUrl(details.backdrop_path, 'w1280'),
      production_companies_names: details.production_companies?.map((company) => company.name).join(', ') ?? '',
      production_countries_names: details.production_countries?.map((country) => country.name).join(', ') ?? '',
      created_by_names: details.created_by?.map((creator) => creator.name).join(', ') ?? '',
      networks_names: details.networks?.map((network) => network.name).join(', ') ?? '',
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
