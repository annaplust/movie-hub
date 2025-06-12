import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { MediaType } from '@core/models/media-type.model';
import { Movie } from '@core/models/movie.model';
import { Person } from '@core/models/person.model';
import { TvShow } from '@core/models/tv-show.model';
import { environment } from '@environments/environment';
import { ScrollItem } from '@shared/components/horizontal-scroll-list/scroll-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchPhase = signal('');

  multiSearchResource = httpResource<ScrollItem[]>(
    () => `${environment.api.url}/search/multi?query=${this.searchPhase()}`,
    {
      defaultValue: [],
      parse: (data) => {
        return (data as { results: Array<Movie | TvShow | Person> }).results.map((result) => {
          return {
            imageUrl: (() => {
              if (result.media_type === MediaType.MOVIE || result.media_type === MediaType.TV) {
                return (result as Movie).poster_path
                  ? `https://image.tmdb.org/t/p/w300${(result as Movie).poster_path}`
                  : null;
              } else if (result.media_type === MediaType.PERSON) {
                return (result as Person).profile_path
                  ? `https://image.tmdb.org/t/p/w300${(result as Person).profile_path}`
                  : null;
              } else {
                return null;
              }
            })(),
            name: 'title' in result ? (result as Movie).title : (result as Person).name,
            link: (() => {
              if (result.media_type === MediaType.MOVIE) {
                return `/movie/${result.id}`;
              } else if (result.media_type === MediaType.TV) {
                return `/tv/${result.id}`;
              } else {
                return `/person/${result.id}`;
              }
            })(),
          };
        });
      },
    },
  );
}
