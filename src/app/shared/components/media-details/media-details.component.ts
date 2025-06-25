import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, GenreTranslationMap } from '@core/models/genre.model';
import { MediaDetailsConfig } from '@shared/models/media.details.config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { ExternalLinksComponent } from '../external-links/external-links.component';
import { HorizontalScrollListComponent } from '../horizontal-scroll-list/horizontal-scroll-list.component';
import { MediaType } from '@core/models/media-type.model';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-media-details',
  imports: [
    CommonModule,
    HorizontalScrollListComponent,
    TranslateModule,
    TableModule,
    ExternalLinksComponent,
    DatePipe,
    FontAwesomeModule,
    CurrencyPipe,
    SkeletonModule,
  ],
  templateUrl: './media-details.component.html',
  styleUrl: './media-details.component.scss',
})
export class MediaDetailsComponent implements OnInit {
  @Input() config!: MediaDetailsConfig;

  private route = inject(ActivatedRoute);

  // Dynamic properties based on config
  get mediaDetails() {
    return this.config.service[`${this.config.type}Details`];
  }

  get mediaCredits() {
    return this.config.service[`${this.config.type}Credits`];
  }

  get mediaRecommendations() {
    return this.config.service[`${this.config.type}Recommendations`];
  }

  get mediaExternalIds() {
    return this.config.service[`${this.config.type}ExternalIds`];
  }

  // Imports
  Genre = Genre;
  GenreTranslationMap = GenreTranslationMap;

  // Icons
  faStar = faStar;

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      const id = routeParams['id'];
      if (this.config.type === MediaType.MOVIE) {
        this.config.service.setSelectedMovieId(id);
      } else {
        this.config.service.setSelectedTvShowId(id);
      }
    });
  }
}
