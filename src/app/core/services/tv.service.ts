import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Credits } from '@core/models/credit.model';
import { ExternalIds } from '@core/models/external-ids.model';
import { TvShowDetails } from '@core/models/tv-details.model';
import { TvShow } from '@core/models/tv-show.model';
import { environment } from '@environments/environment';
import { ScrollItem } from '@shared/components/horizontal-scroll-list/scroll-item.model';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  id = signal(null);

  trendingTvShowsResource = httpResource<ScrollItem[]>(() => `${environment.api.url}/trending/tv/day`, {
    defaultValue: [],
    parse: (data) => {
      return (data as { results: TvShow[] }).results.map((movie) => {
        return {
          imageUrl: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 'assets/no-image.png',
          name: movie.name,
          link: `/tv/${movie.id}`,
        };
      });
    },
  });

  recommendationsResource = httpResource<ScrollItem[]>(
    () => (this.id() ? `${environment.api.url}/tv/${this.id()}/recommendations` : undefined),
    {
      defaultValue: [],
      parse: (data) => {
        return (data as { results: TvShow[] }).results.map((show) => {
          return {
            imageUrl: show.poster_path ? `https://image.tmdb.org/t/p/w300${show.poster_path}` : null,
            name: show.name,
            link: `/tv/${show.id}`,
          };
        });
      },
    },
  );

  tvShowDetailsResource = httpResource<TvShowDetails>(() =>
    this.id() ? `${environment.api.url}/tv/${this.id()}` : undefined,
  );
  externalIdsResource = httpResource<ExternalIds>(() =>
    this.id() ? `${environment.api.url}/tv/${this.id()}/external_ids` : undefined,
  );

  castResource = httpResource<ScrollItem[]>(
    () => (this.id() ? `${environment.api.url}/tv/${this.id()}/credits` : undefined),
    {
      defaultValue: [],
      parse: (data) => {
        return (data as Credits).cast.slice(0, 9).map((actor) => {
          return {
            imageUrl: actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : null,
            name: actor.name,
            link: `/person/${actor.id}`,
          };
        });
      },
    },
  );
}
