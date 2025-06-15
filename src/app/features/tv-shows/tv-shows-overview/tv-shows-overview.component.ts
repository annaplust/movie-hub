import { Component, inject } from '@angular/core';
import { TvService } from '@core/services/tv.service';
import { TranslateModule } from '@ngx-translate/core';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';

@Component({
  selector: 'app-tv-shows-overview',
  imports: [HorizontalScrollListComponent, TranslateModule],
  templateUrl: './tv-shows-overview.component.html',
  styleUrl: './tv-shows-overview.component.scss',
})
export class TvShowsOverviewComponent {
  private tvService = inject(TvService);

  // Resources
  trendingWeekTvShows = this.tvService.trendingWeekTvShows;
}
