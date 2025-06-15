import { Component, inject } from '@angular/core';
import { MediaType } from '@core/models/media-type.model';
import { MediaDetailsConfig } from '@shared/models/media.details.config';
import { MoviesService } from '@core/services/movies.service';
import { MediaDetailsComponent } from '@shared/components/media-details/media-details.component';

@Component({
  selector: 'app-movie-details',
  imports: [MediaDetailsComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  private movieService = inject(MoviesService);

  config: MediaDetailsConfig = {
    type: MediaType.MOVIE,
    service: this.movieService,
    routeParam: 'id',
    titleField: 'title',
    dateField: 'release_date',
    dateLabel: 'premiere',
    route: '/movie',
    hasRuntime: true,
    customDetails: [
      { labelKey: 'premiere', pipe: 'date', valueField: 'release_date' },
      { labelKey: 'revenue', valueField: 'revenue', pipe: 'currency', pipeArgs: ['USD', 'symbol-narrow'] },
      { labelKey: 'budget', valueField: 'budget', pipe: 'currency', pipeArgs: ['USD', 'symbol-narrow'] },
      { labelKey: 'productionCompanies', valueField: 'production_companies_names' },
      { labelKey: 'productionCountries', valueField: 'production_countries_names' },
    ],
  };
}
