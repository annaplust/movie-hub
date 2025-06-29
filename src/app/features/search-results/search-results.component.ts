import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faTimes, faSearch, faChevronDown, faChevronUp, faStar } from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SearchService } from '@core/services/search.service';
import { TranslateModule } from '@ngx-translate/core';
import { DiscoveryService } from '@core/services/discovery.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

// Updated filter types
type FilterSection = 'mediaType' | 'genres' | 'year' | 'rating' | 'runtime' | 'sort' | 'language' | 'watchProviders';

@Component({
  selector: 'app-search-results',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ButtonModule,
    CheckboxModule,
    SliderModule,
    DropdownModule,
    InputNumberModule,
    ToggleButtonModule,
    TranslateModule,
    ToggleSwitchModule,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit {
  private discoveryService = inject(DiscoveryService);
  private searchService = inject(SearchService);
  private route = inject(ActivatedRoute);

  // Icons
  faFilter = faFilter;
  faTimes = faTimes;
  faSearch = faSearch;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faStar = faStar;

  // UI State
  showMobileFilters = signal(false);

  // Content type toggle - default to movies
  isShowingMoviesSignal = signal(true);
  isShowingTvShows = false;

  // Search query signal
  searchQuery = signal('');

  // Use the discovery service's filter and expansion state
  get filters() {
    return this.discoveryService.filters;
  }

  get expandedFilters() {
    return this.discoveryService.expandedFilters;
  }

  // Sort and language options
  sortOptions = [
    { label: 'Most Popular', value: 'popularity.desc' },
    { label: 'Least Popular', value: 'popularity.asc' },
    { label: 'Highest Rated', value: 'vote_average.desc' },
    { label: 'Lowest Rated', value: 'vote_average.asc' },
    { label: 'Newest First', value: 'primary_release_date.desc' },
    { label: 'Oldest First', value: 'primary_release_date.asc' },
    { label: 'Title A-Z', value: 'title.asc' },
    { label: 'Title Z-A', value: 'title.desc' },
    { label: 'Most Voted', value: 'vote_count.desc' },
  ];

  languageOptions = [
    { label: 'Any Language', value: null },
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Italian', value: 'it' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
  ];

  // Get results based on toggle state
  results = computed(() => {
    if (this.isShowingMoviesSignal()) {
      // Use TV shows resource from discovery service
      return this.discoveryService.movieDiscoveryResource?.value() || [];
    } else {
      // Use movies resource from discovery service (default)
      return this.discoveryService.tvDiscoveryResource?.value() || [];
    }
  });

  // Computed active filters count
  activeFiltersCount = computed(() => {
    return this.discoveryService.getActiveFiltersCount();
  });

  // Loading state based on current content type
  isLoading = computed(() => {
    if (this.isShowingMoviesSignal()) {
      return this.discoveryService.tvDiscoveryResource?.isLoading() || false;
    } else {
      return this.discoveryService.movieDiscoveryResource?.isLoading() || false;
    }
  });

  ngOnInit(): void {
    // Subscribe to route params to get the search phrase
    this.route.params.subscribe((params) => {
      if (params['phrase']) {
        const searchPhrase = decodeURIComponent(params['phrase']);
        this.searchQuery.set(searchPhrase);
        // Trigger the search with the phrase from URL
        this.searchService.searchPhase?.set(searchPhrase);
      }
    });

    // Also listen to query params for any additional parameters
    this.route.queryParams.subscribe((queryParams) => {
      // Handle any additional query parameters if needed
    });
  }

  // UI Methods
  toggleMobileFilters(): void {
    this.showMobileFilters.update((value) => !value);
  }

  toggleFilterSection(section: FilterSection): void {
    this.discoveryService.toggleFilterExpansion(section);
  }

  // Content type toggle method
  onContentTypeToggle(): void {
    this.isShowingMoviesSignal.update((value) => !value);
  }

  // Filter Update Methods - delegate to discovery service
  onMediaTypeChange(mediaType: string, checked: boolean): void {
    this.discoveryService.updateMediaType(mediaType, checked);
  }

  onGenreChange(genre: string, checked: boolean): void {
    this.discoveryService.updateGenre(genre, checked);
  }

  onWatchProviderChange(provider: string, checked: boolean): void {
    this.discoveryService.updateWatchProvider(provider, checked);
  }

  onYearRangeChange(values: number[] | undefined): void {
    if (!values || values.length !== 2) return;
    this.discoveryService.updateYearRange([values[0], values[1]]);
  }

  onYearMinChange(value: number | string): void {
    if (!value) return;
    const numValue = Number(value);
    const currentMax = this.filters().yearRange.current[1];
    const newMin = Math.min(numValue, currentMax);
    this.discoveryService.updateYearRange([newMin, currentMax]);
  }

  onYearMaxChange(value: number | string): void {
    if (!value) return;
    const numValue = Number(value);
    const currentMin = this.filters().yearRange.current[0];
    const newMax = Math.max(numValue, currentMin);
    this.discoveryService.updateYearRange([currentMin, newMax]);
  }

  onRatingRangeChange(values: number[] | undefined): void {
    if (!values || values.length !== 2) return;
    this.discoveryService.updateRating([values[0], values[1]]);
  }

  onRatingMinChange(value: number | string): void {
    if (!value) return;
    const numValue = Number(value);
    const currentMax = this.filters().rating.current[1];
    const newMin = Math.min(numValue, currentMax);
    this.discoveryService.updateRating([newMin, currentMax]);
  }

  onRatingMaxChange(value: number | string): void {
    if (!value) return;
    const numValue = Number(value);
    const currentMin = this.filters().rating.current[0];
    const newMax = Math.max(numValue, currentMin);
    this.discoveryService.updateRating([currentMin, newMax]);
  }

  onRuntimeRangeChange(values: number[] | undefined): void {
    if (!values || values.length !== 2) return;
    this.discoveryService.updateRuntime([values[0], values[1]]);
  }

  onRuntimeMinChange(value: number | string): void {
    if (!value) return;
    const numValue = Number(value);
    const currentMax = this.filters().runtime.current[1];
    const newMin = Math.min(numValue, currentMax);
    this.discoveryService.updateRuntime([newMin, currentMax]);
  }

  onRuntimeMaxChange(value: number | string): void {
    if (!value) return;
    const numValue = Number(value);
    const currentMin = this.filters().runtime.current[0];
    const newMax = Math.max(numValue, currentMin);
    this.discoveryService.updateRuntime([currentMin, newMax]);
  }

  onLanguageChange(language: string | null): void {
    this.discoveryService.updateLanguage(language);
  }

  onSortChange(sortBy: string): void {
    this.discoveryService.updateSortBy(sortBy);
  }

  clearAllFilters(): void {
    this.discoveryService.resetFilters();
  }

  // Utility methods
  getResultType(link: string): string {
    if (link?.startsWith('/movie/')) {
      return 'Movie';
    } else if (link?.startsWith('/tv/')) {
      return 'TV Show';
    } else if (link?.startsWith('/person/')) {
      return 'Person';
    }
    return 'Result';
  }

  getResultYear(result: any): string {
    // Extract year from release_date or first_air_date
    const date = result.release_date || result.first_air_date;
    if (date) {
      return new Date(date).getFullYear().toString();
    }
    return '';
  }

  // Method to clear search and navigate back
  clearSearch(): void {
    // Navigate back to discovery/home page or wherever appropriate
    // You might want to inject Router and navigate to a different route
    this.searchQuery.set('');
  }

  // This component is always in search mode since it gets a phrase from URL
  get isSearchMode(): boolean {
    return true;
  }

  // Getter for current content type label
  get currentContentType(): string {
    return this.isShowingMoviesSignal() ? 'TV Shows' : 'Movies';
  }
}
