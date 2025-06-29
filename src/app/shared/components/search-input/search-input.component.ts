import { Component, OnInit, OnDestroy, ElementRef, ViewChild, inject, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ScrollItem } from '@shared/components/horizontal-scroll-list/scroll-item.model';
import { SearchService } from '@core/services/search.service';

@Component({
  selector: 'app-search-input',
  imports: [IconFieldModule, FontAwesomeModule, ButtonModule, FormsModule, InputTextModule, CommonModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef<HTMLInputElement>;

  // Icons
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;

  searchPhrase = '';
  searchResults: ScrollItem[] = [];
  showDropdown = false;
  selectedIndex = -1;

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();
  private searchService = inject(SearchService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      const results = this.searchService.multiSearchResource.value();
      const isLoading = this.searchService.multiSearchResource.isLoading();

      if (!isLoading) {
        this.searchResults = results.splice(0, 3) || [];
        this.showDropdown = this.searchResults.length > 0 && this.searchPhrase.length > 0;
        this.selectedIndex = -1;
      }
    });
  }

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((searchTerm) => {
        this.searchService.searchPhase.set(searchTerm);
      });

    // Hide dropdown when clicking outside
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  onSearchInput() {
    if (this.searchPhrase.trim().length > 0) {
      this.searchSubject.next(this.searchPhrase.trim());
    } else {
      this.searchService.searchPhase.set('');
      this.searchResults = [];
      this.showDropdown = false;
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.showDropdown) {
      if (event.key === 'Enter') {
        this.navigateToSearchPage();
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.searchResults.length - 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        break;
      case 'Enter':
        event.preventDefault();
        if (this.selectedIndex >= 0) {
          this.selectResult(this.searchResults[this.selectedIndex]);
        } else {
          this.navigateToSearchPage();
        }
        break;
      case 'Escape':
        this.hideDropdown();
        this.searchInput.nativeElement.blur();
        break;
    }
  }

  selectResult(result: ScrollItem) {
    this.onClearSearchPhrase();
    this.searchPhrase = result.name;

    this.router.navigate([result.link]);
  }

  onSearch() {
    this.navigateToSearchPage();
  }

  private navigateToSearchPage() {
    if (this.searchPhrase.trim()) {
      this.hideDropdown();
      this.router.navigate(['/search', this.searchPhrase.trim()]);
    }
  }

  onClearSearchPhrase() {
    this.searchPhrase = '';
    this.searchService.searchPhase.set('');
    this.hideDropdown();
    this.searchInput.nativeElement.focus();
  }

  getResultType(link: string): string {
    if (link.startsWith('/movie/')) {
      return 'Movie';
    } else if (link.startsWith('/tv/')) {
      return 'TV Show';
    } else if (link.startsWith('/person/')) {
      return 'Person';
    }
    return 'Result';
  }

  private hideDropdown() {
    this.showDropdown = false;
    this.selectedIndex = -1;
  }

  private onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const searchContainer = target.closest('.search');
    if (!searchContainer) {
      this.hideDropdown();
    }
  }

  get isLoading(): boolean {
    return this.searchService.multiSearchResource.isLoading();
  }
}
