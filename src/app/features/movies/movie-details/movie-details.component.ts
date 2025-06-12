import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieGenre, MovieGenreTranslationMap } from '@core/models/movie-genre.model';
import { MoviesService } from '@core/services/movies.service';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';

@Component({
  selector: 'app-movie-details',
  imports: [HorizontalScrollListComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  private movieService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  // Resources
  movieDetailsResource = this.movieService.movieDetailsResource;
  castResource = this.movieService.castResource;
  recommendationsResource = this.movieService.recommendationsResource;
  externalIdsResource = this.movieService.externalIdsResource;

  // Imports
  MovieGenre = MovieGenre;
  MovieGenreTranslationMap = MovieGenreTranslationMap;

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.movieService.id.set(routeParams['id']);
    });
  }
}
