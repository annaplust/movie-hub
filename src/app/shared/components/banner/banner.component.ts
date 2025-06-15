import { CommonModule, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Genre, GenreTranslationMap } from '@core/models/genre.model';
import { Movie } from '@core/models/movie.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-banner',
  imports: [CommonModule, DatePipe, ButtonModule, FontAwesomeModule, RouterModule, TranslateModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  movies = input.required<Movie[]>();

  // Icons
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faStar = faStar;

  // Imports
  Genre = Genre;
  GenreTranslationMap = GenreTranslationMap;

  currentIndex = 0;

  prev() {
    this.currentIndex = this.currentIndex === 0 ? this.movies().length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = this.currentIndex === this.movies().length - 1 ? 0 : this.currentIndex + 1;
  }
}
