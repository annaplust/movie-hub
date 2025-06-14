import { Component, inject } from '@angular/core';
import { TvService } from '@core/services/tv.service';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';

@Component({
  selector: 'app-tv-shows-overview',
  imports: [HorizontalScrollListComponent],
  templateUrl: './tv-shows-overview.component.html',
  styleUrl: './tv-shows-overview.component.scss',
})
export class TvShowsOverviewComponent {
  private tvService = inject(TvService);

  // Resources
  trendingTvShows = this.tvService.trendingTvShowsResource;
}
