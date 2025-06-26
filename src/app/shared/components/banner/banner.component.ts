// banner.component.ts
import { CommonModule, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GenreTranslationMap } from '@core/models/genre.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-banner',
  imports: [
    CommonModule,
    DatePipe,
    ButtonModule,
    FontAwesomeModule,
    RouterModule,
    TranslateModule,
    CarouselModule,
    SkeletonModule,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  // Required data
  items = input.required<any[]>();

  // Optional configuration
  loading = input<boolean>(false);

  // Field mappings - these determine which fields to display
  title = input<string | null>(null); // e.g., 'title'
  releaseDate = input<string | null>(null); // e.g., 'release_date'

  // Image configuration
  imageBaseUrl = input<string>('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/');

  // Custom template slots (for advanced customization)
  showRating = input<boolean>(true);
  showGenres = input<boolean>(true);
  showReleaseDate = input<boolean>(true);
  showDescription = input<boolean>(true);

  // Icons
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faStar = faStar;

  GenreTranslationMap = GenreTranslationMap;

  // Helper methods
  getFieldValue(item: any, fieldName: string | null): any {
    if (!fieldName || !item) return null;
    return item[fieldName];
  }

  getImageUrl(item: any): string {
    const imagePath = this.getFieldValue(item, 'backdrop_path');
    return imagePath ? `${this.imageBaseUrl()}${imagePath}` : '';
  }

  getRouterLink(item: any): string[] {
    return [`/${item.media_type}`, item.id];
  }
}
