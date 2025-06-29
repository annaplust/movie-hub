import { httpResource } from '@angular/common/http';
import { Injectable, signal, computed } from '@angular/core';
import { MediaType } from '@core/models/media-type.model';
import { Movie } from '@core/models/movie.model';
import { TvShow } from '@core/models/tv-show.model';
import { environment } from '@environments/environment';
import { ScrollItem } from '@shared/components/horizontal-scroll-list/scroll-item.model';

// Filter types
type FilterSection = 'mediaType' | 'genres' | 'year' | 'rating' | 'runtime' | 'sort' | 'language' | 'watchProviders';

interface FilterOptions {
  mediaTypes: Array<{ label: string; value: string; checked: boolean }>;
  genres: Array<{ label: string; value: string; checked: boolean }>;
  yearRange: { min: number; max: number; current: [number, number] };
  rating: { min: number; max: number; current: [number, number] };
  runtime: { min: number; max: number; current: [number, number] };
  language: string | null;
  watchProviders: Array<{ label: string; value: string; checked: boolean }>;
  sortBy: string;
}

interface ExpandedFilters {
  mediaType: boolean;
  genres: boolean;
  year: boolean;
  rating: boolean;
  runtime: boolean;
  sort: boolean;
  language: boolean;
  watchProviders: boolean;
}

interface DiscoveryParams {
  page: number;
  sortBy: string;
  genres?: string;
  yearMin?: number;
  yearMax?: number;
  ratingMin?: number;
  ratingMax?: number;
  runtimeMin?: number;
  runtimeMax?: number;
  language?: string;
  watchProviders?: string;
  region?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DiscoveryService {
  // Filter state signals
  filters = signal<FilterOptions>({
    mediaTypes: [
      { label: 'Movies', value: 'movie', checked: true },
      { label: 'TV Shows', value: 'tv', checked: false },
    ],
    genres: [
      { label: 'Action', value: '28', checked: false },
      { label: 'Adventure', value: '12', checked: false },
      { label: 'Animation', value: '16', checked: false },
      { label: 'Comedy', value: '35', checked: false },
      { label: 'Crime', value: '80', checked: false },
      { label: 'Documentary', value: '99', checked: false },
      { label: 'Drama', value: '18', checked: false },
      { label: 'Family', value: '10751', checked: false },
      { label: 'Fantasy', value: '14', checked: false },
      { label: 'History', value: '36', checked: false },
      { label: 'Horror', value: '27', checked: false },
      { label: 'Music', value: '10402', checked: false },
      { label: 'Mystery', value: '9648', checked: false },
      { label: 'Romance', value: '10749', checked: false },
      { label: 'Science Fiction', value: '878', checked: false },
      { label: 'Thriller', value: '53', checked: false },
      { label: 'War', value: '10752', checked: false },
      { label: 'Western', value: '37', checked: false },
    ],
    yearRange: { min: 1900, max: new Date().getFullYear() + 1, current: [2000, new Date().getFullYear()] },
    rating: { min: 0, max: 10, current: [0, 10] },
    runtime: { min: 0, max: 400, current: [0, 400] },
    language: null,
    watchProviders: [
      { label: 'Netflix', value: '8', checked: false },
      { label: 'Amazon Prime Video', value: '119', checked: false },
      { label: 'Disney Plus', value: '337', checked: false },
      { label: 'HBO Max', value: '384', checked: false },
      { label: 'Apple TV Plus', value: '350', checked: false },
      { label: 'Hulu', value: '15', checked: false },
      { label: 'Paramount Plus', value: '531', checked: false },
    ],
    sortBy: 'popularity.desc',
  });

  expandedFilters = signal<ExpandedFilters>({
    mediaType: false,
    genres: false,
    year: false,
    rating: false,
    runtime: false,
    sort: false,
    language: false,
    watchProviders: false,
  });

  currentPage = signal(1);
  region = signal('US'); // Default region for watch providers

  // Computed values for building API URLs
  private selectedMediaTypes = computed(() => {
    return this.filters()
      .mediaTypes.filter((mt) => mt.checked)
      .map((mt) => mt.value);
  });

  private selectedGenres = computed(() => {
    return this.filters()
      .genres.filter((genre) => genre.checked)
      .map((genre) => genre.value)
      .join(',');
  });

  private selectedWatchProviders = computed(() => {
    return this.filters()
      .watchProviders.filter((provider) => provider.checked)
      .map((provider) => provider.value)
      .join('|');
  });

  // Build discovery parameters
  private discoveryParams = computed((): DiscoveryParams => {
    const filters = this.filters();
    console.log(filters);
    const params: DiscoveryParams = {
      page: this.currentPage(),
      sortBy: filters.sortBy,
    };

    // Add genre filter
    const genres = this.selectedGenres();
    if (genres) {
      params.genres = genres;
    }

    // Add year range
    const [yearMin, yearMax] = filters.yearRange.current;
    if (yearMin > filters.yearRange.min) {
      params.yearMin = yearMin;
    }
    if (yearMax < filters.yearRange.max) {
      params.yearMax = yearMax;
    }

    // Add rating range
    const [ratingMin, ratingMax] = filters.rating.current;
    if (ratingMin > filters.rating.min) {
      params.ratingMin = ratingMin;
    }
    if (ratingMax < filters.rating.max) {
      params.ratingMax = ratingMax;
    }

    // Add runtime range
    const [runtimeMin, runtimeMax] = filters.runtime.current;
    if (runtimeMin > filters.runtime.min) {
      params.runtimeMin = runtimeMin;
    }
    if (runtimeMax < filters.runtime.max) {
      params.runtimeMax = runtimeMax;
    }

    // Add language
    if (filters.language) {
      params.language = filters.language;
    }

    // Add watch providers
    const watchProviders = this.selectedWatchProviders();
    if (watchProviders) {
      params.watchProviders = watchProviders;
      params.region = this.region();
    }

    return params;
  });

  // Build API URL for movies
  private buildMovieDiscoveryUrl = computed(() => {
    const params = this.discoveryParams();
    const baseUrl = `${environment.api.url}/discover/movie`;
    const urlParams = new URLSearchParams();

    // Basic parameters
    urlParams.set('include_adult', 'false');
    urlParams.set('include_video', 'false');
    urlParams.set('page', params.page.toString());
    urlParams.set('sort_by', params.sortBy);

    // Genre filter
    if (params.genres) {
      urlParams.set('with_genres', params.genres);
    }

    // Year filters for movies
    if (params.yearMin) {
      urlParams.set('primary_release_date.gte', `${params.yearMin}-01-01`);
    }
    if (params.yearMax) {
      urlParams.set('primary_release_date.lte', `${params.yearMax}-12-31`);
    }

    // Rating filters
    if (params.ratingMin) {
      urlParams.set('vote_average.gte', params.ratingMin.toString());
    }
    if (params.ratingMax) {
      urlParams.set('vote_average.lte', params.ratingMax.toString());
    }

    // Runtime filters for movies
    if (params.runtimeMin) {
      urlParams.set('with_runtime.gte', params.runtimeMin.toString());
    }
    if (params.runtimeMax) {
      urlParams.set('with_runtime.lte', params.runtimeMax.toString());
    }

    // Language filter
    if (params.language) {
      urlParams.set('with_original_language', params.language);
    }

    // Watch provider filters
    if (params.watchProviders && params.region) {
      urlParams.set('with_watch_providers', params.watchProviders);
      urlParams.set('watch_region', params.region);
    }

    console.log(`${baseUrl}?${urlParams.toString()}`);
    return `${baseUrl}?${urlParams.toString()}`;
  });

  // Build API URL for TV shows
  private buildTvDiscoveryUrl = computed(() => {
    const params = this.discoveryParams();
    const baseUrl = `${environment.api.url}/discover/tv`;
    const urlParams = new URLSearchParams();

    // Basic parameters
    urlParams.set('include_adult', 'false');
    urlParams.set('include_video', 'false');
    urlParams.set('page', params.page.toString());
    urlParams.set('sort_by', params.sortBy);

    // Genre filter
    if (params.genres) {
      urlParams.set('with_genres', params.genres);
    }

    // Year filters for TV shows
    if (params.yearMin) {
      urlParams.set('first_air_date.gte', `${params.yearMin}-01-01`);
    }
    if (params.yearMax) {
      urlParams.set('first_air_date.lte', `${params.yearMax}-12-31`);
    }

    // Rating filters
    if (params.ratingMin) {
      urlParams.set('vote_average.gte', params.ratingMin.toString());
    }
    if (params.ratingMax) {
      urlParams.set('vote_average.lte', params.ratingMax.toString());
    }

    // Runtime filters for TV shows
    if (params.runtimeMin) {
      urlParams.set('with_episode_run_time.gte', params.runtimeMin.toString());
    }
    if (params.runtimeMax) {
      urlParams.set('with_episode_run_time.lte', params.runtimeMax.toString());
    }

    // Language filter
    if (params.language) {
      urlParams.set('with_original_language', params.language);
    }

    // Watch provider filters
    if (params.watchProviders && params.region) {
      urlParams.set('with_watch_providers', params.watchProviders);
      urlParams.set('watch_region', params.region);
    }

    return `${baseUrl}?${urlParams.toString()}`;
  });

  // HTTP Resource for movie discovery
  movieDiscoveryResource = httpResource(() => this.buildMovieDiscoveryUrl(), {
    defaultValue: [],
    parse: (data) => {
      console.log(data);
      return (data as { results: Array<Movie> }).results.map(
        (movie): ScrollItem => ({
          imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
          name: movie.title,
          link: `/movie/${movie.id}`,
        }),
      );
    },
  });

  // HTTP Resource for TV show discovery
  tvDiscoveryResource = httpResource(() => this.buildTvDiscoveryUrl(), {
    defaultValue: [],
    parse: (data) => {
      return (data as { results: Array<TvShow> }).results.map(
        (tvShow): ScrollItem => ({
          imageUrl: tvShow.poster_path ? `https://image.tmdb.org/t/p/w300${tvShow.poster_path}` : null,
          name: tvShow.name,
          link: `/tv/${tvShow.id}`,
        }),
      );
    },
  });

  // Computed property to get combined results based on selected media types
  combinedResults = computed(() => {
    const selectedTypes = this.selectedMediaTypes();
    const results: ScrollItem[] = [];

    if (selectedTypes.includes('movie')) {
      results.push(...this.movieDiscoveryResource.value());
    }

    if (selectedTypes.includes('tv')) {
      results.push(...this.tvDiscoveryResource.value());
    }

    return results;
  });

  // Computed property to check if movies are selected
  isMoviesSelected = computed(() => this.selectedMediaTypes().includes('movie'));

  // Computed property to check if TV shows are selected
  isTvSelected = computed(() => this.selectedMediaTypes().includes('tv'));

  // Methods for updating filters
  updateMediaType(mediaType: string, checked: boolean): void {
    this.filters.update((filters) => {
      const updatedMediaTypes = filters.mediaTypes.map((mt) => ({
        ...mt,
        checked: mt.value === mediaType ? checked : mt.checked,
      }));

      // Ensure at least one media type is selected
      if (!updatedMediaTypes.some((mt) => mt.checked)) {
        updatedMediaTypes[0].checked = true;
      }

      return {
        ...filters,
        mediaTypes: updatedMediaTypes,
      };
    });
    this.resetPage();
  }

  updateGenre(genreValue: string, checked: boolean): void {
    this.filters.update((filters) => ({
      ...filters,
      genres: filters.genres.map((genre) => (genre.value === genreValue ? { ...genre, checked } : genre)),
    }));
    this.resetPage();
  }

  updateYearRange(range: [number, number]): void {
    this.filters.update((filters) => ({
      ...filters,
      yearRange: { ...filters.yearRange, current: range },
    }));
    this.resetPage();
  }

  updateRating(range: [number, number]): void {
    this.filters.update((filters) => ({
      ...filters,
      rating: { ...filters.rating, current: range },
    }));
    this.resetPage();
  }

  updateRuntime(range: [number, number]): void {
    this.filters.update((filters) => ({
      ...filters,
      runtime: { ...filters.runtime, current: range },
    }));
    this.resetPage();
  }

  updateLanguage(language: string | null): void {
    this.filters.update((filters) => ({
      ...filters,
      language,
    }));
    this.resetPage();
  }

  updateWatchProvider(providerValue: string, checked: boolean): void {
    this.filters.update((filters) => ({
      ...filters,
      watchProviders: filters.watchProviders.map((provider) =>
        provider.value === providerValue ? { ...provider, checked } : provider,
      ),
    }));
    this.resetPage();
  }

  updateSortBy(sortBy: string): void {
    this.filters.update((filters) => ({
      ...filters,
      sortBy,
    }));
    this.resetPage();
  }

  updateRegion(region: string): void {
    this.region.set(region);
    this.resetPage();
  }

  // Filter expansion methods
  toggleFilterExpansion(section: FilterSection): void {
    this.expandedFilters.update((expanded) => ({
      ...expanded,
      [section]: !expanded[section],
    }));
  }

  // Page management
  nextPage(): void {
    this.currentPage.update((page) => page + 1);
  }

  previousPage(): void {
    this.currentPage.update((page) => Math.max(1, page - 1));
  }

  setPage(page: number): void {
    this.currentPage.set(Math.max(1, page));
  }

  resetPage(): void {
    this.currentPage.set(1);
  }

  // Reset all filters
  resetFilters(): void {
    this.filters.update((filters) => ({
      mediaTypes: filters.mediaTypes.map((mt, index) => ({ ...mt, checked: index === 0 })),
      genres: filters.genres.map((genre) => ({ ...genre, checked: false })),
      yearRange: { ...filters.yearRange, current: [filters.yearRange.min, filters.yearRange.max] },
      rating: { ...filters.rating, current: [filters.rating.min, filters.rating.max] },
      runtime: { ...filters.runtime, current: [filters.runtime.min, filters.runtime.max] },
      language: null,
      watchProviders: filters.watchProviders.map((provider) => ({ ...provider, checked: false })),
      sortBy: 'popularity.desc',
    }));
    this.resetPage();
  }

  // Get active filters count for UI badges
  getActiveFiltersCount(): number {
    const filters = this.filters();
    let count = 0;

    // Count selected genres
    count += filters.genres.filter((g) => g.checked).length;

    // Count year range if not default
    if (filters.yearRange.current[0] > filters.yearRange.min || filters.yearRange.current[1] < filters.yearRange.max) {
      count++;
    }

    // Count rating if not default
    if (filters.rating.current[0] > filters.rating.min || filters.rating.current[1] < filters.rating.max) {
      count++;
    }

    // Count runtime if not default
    if (filters.runtime.current[0] > filters.runtime.min || filters.runtime.current[1] < filters.runtime.max) {
      count++;
    }

    // Count language if selected
    if (filters.language) {
      count++;
    }

    // Count watch providers
    count += filters.watchProviders.filter((wp) => wp.checked).length;

    // Count sort if not default
    if (filters.sortBy !== 'popularity.desc') {
      count++;
    }

    return count;
  }

  // Get currently selected media types (helper method for UI)
  getSelectedMediaTypes(): string[] {
    return this.selectedMediaTypes();
  }
}
