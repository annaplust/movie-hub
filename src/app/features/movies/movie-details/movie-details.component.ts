import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, GenreTranslationMap } from '@core/models/genre.model';
import { MoviesService } from '@core/services/movies.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';
import { TableModule } from 'primeng/table';
import { ExternalLinksComponent } from '@shared/components/external-links/external-links.component';

@Component({
  selector: 'app-movie-details',
  imports: [
    CommonModule,
    HorizontalScrollListComponent,
    DatePipe,
    FontAwesomeModule,
    TableModule,
    ExternalLinksComponent,
    CurrencyPipe,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  private movieService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  // Resources
  movieDetailsResource = this.movieService.movieDetailsResource;
  creditsResource = this.movieService.creditsResource;
  recommendationsResource = this.movieService.recommendationsResource;
  externalIdsResource = this.movieService.externalIdsResource;

  // Imports
  Genre = Genre;
  GenreTranslationMap = GenreTranslationMap;

  // Icons
  faStar = faStar;

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.movieService.id.set(routeParams['id']);
    });
  }
}
