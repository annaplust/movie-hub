import { Component, inject } from '@angular/core';
import { MoviesService } from '@core/services/movies.service';
import { TranslateModule } from '@ngx-translate/core';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-movies-overview',
  imports: [HorizontalScrollListComponent, TranslateModule, SkeletonModule],
  templateUrl: './movies-overview.component.html',
  styleUrl: './movies-overview.component.scss',
})
export class MoviesOverviewComponent {
  private moviesService = inject(MoviesService);

  // Resources
  trendingDayMovies = this.moviesService.trendingDayMovies;
  upcomingMovies = this.moviesService.upcomingMovies;
  nowPlayingMovies = this.moviesService.nowPlayingMovies;
}
