import { Component, inject } from '@angular/core';
import { MediaType } from '@core/models/media-type.model';
import { MediaDetailsConfig } from '@shared/models/media.details.config';
import { TvService } from '@core/services/tv.service';
import { MediaDetailsComponent } from '@shared/components/media-details/media-details.component';

@Component({
  selector: 'app-tv-show-details',
  imports: [MediaDetailsComponent],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.scss',
})
export class TvShowDetailsComponent {
  private tvService = inject(TvService);

  config: MediaDetailsConfig = {
    type: MediaType.TV,
    service: this.tvService,
    routeParam: 'id',
    titleField: 'name',
    dateField: 'first_air_date',
    dateLabel: 'firstAirDate',
    route: '/tv',
    hasRuntime: false,
    customDetails: [
      { labelKey: 'noOfSeasons', valueField: 'number_of_seasons' },
      { labelKey: 'noOfEpisodes', valueField: 'number_of_episodes' },
      { labelKey: 'firstAirDate', pipe: 'date', valueField: 'first_air_date' },
      { labelKey: 'lastAirDate', pipe: 'date', valueField: 'last_air_date' },
      { labelKey: 'productionCompanies', valueField: 'production_companies_names' },
      { labelKey: 'productionCountries', valueField: 'production_countries_names' },
    ],
  };
}
