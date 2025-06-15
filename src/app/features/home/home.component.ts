import { Component, inject } from '@angular/core';
import { MoviesService } from '@core/services/movies.service';
import { ButtonModule } from 'primeng/button';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, BannerComponent, HorizontalScrollListComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private moviesService = inject(MoviesService);

  // Resources
  trendingWeekMovies = this.moviesService.trendingWeekMovies;
  nowPlayingMovies = this.moviesService.nowPlayingMovies;
  upcomingMovies = this.moviesService.upcomingMovies;
}
