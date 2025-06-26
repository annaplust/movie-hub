import { Component, inject } from '@angular/core';
import { TvService } from '@core/services/tv.service';
import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-tv-shows-overview',
  imports: [ButtonModule, BannerComponent, HorizontalScrollListComponent, TranslateModule, SkeletonModule],
  templateUrl: './tv-shows-overview.component.html',
  styleUrl: './tv-shows-overview.component.scss',
})
export class TvShowsOverviewComponent {
  private tvService = inject(TvService);

  // Resources
  trendingDayTvShows = this.tvService.trendingDayTvShows;
  trendingWeekTvShows = this.tvService.trendingWeekTvShows;
  airingTodayTvShows = this.tvService.onTheAirTvShows;
  popularTvShows = this.tvService.popularTvShows;
}
