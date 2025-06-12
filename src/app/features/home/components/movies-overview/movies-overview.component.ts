import { Component, inject } from '@angular/core';
import { MoviesService } from '@core/services/movies.service';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';

@Component({
  selector: 'app-movies-overview',
  imports: [HorizontalScrollListComponent],
  templateUrl: './movies-overview.component.html',
  styleUrl: './movies-overview.component.scss',
})
export class MoviesOverviewComponent {
  private moviesService = inject(MoviesService);

  // Resources
  trendingMoviesResource = this.moviesService.trendingMoviesResource;
  upcomingMoviesResource = this.moviesService.upcomingMoviesResource;
  nowPlayingMoviesResource = this.moviesService.nowPlayingMoviesResource;
}
