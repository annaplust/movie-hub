import { Component, inject } from '@angular/core';
import { MoviesService } from '@core/services/movies.service';
import { ButtonModule } from 'primeng/button';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, BannerComponent, HorizontalScrollListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private moviesService = inject(MoviesService);

  // Resources
  trendingWeekMoviesResource = this.moviesService.trendingWeekMoviesResource;
  nowPlayingMoviesResource = this.moviesService.nowPlayingMoviesResource;
  upcomingMoviesResource = this.moviesService.upcomingMoviesResource;
}
