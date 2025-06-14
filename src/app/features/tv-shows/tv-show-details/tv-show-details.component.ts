import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, GenreTranslationMap } from '@core/models/genre.model';
import { TvService } from '@core/services/tv.service';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';

@Component({
  selector: 'app-tv-show-details',
  imports: [HorizontalScrollListComponent],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.scss',
})
export class TvShowDetailsComponent {
  private tvService = inject(TvService);
  private route = inject(ActivatedRoute);

  // Resources
  tvShowDetailsResource = this.tvService.tvShowDetailsResource;
  castResource = this.tvService.castResource;
  recommendationsResource = this.tvService.recommendationsResource;
  externalIdsResource = this.tvService.externalIdsResource;

  // Imports
  Genre = Genre;
  GenreTranslationMap = GenreTranslationMap;

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.tvService.id.set(routeParams['id']);
    });
  }
}
