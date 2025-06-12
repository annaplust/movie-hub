import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { ActorCredit, ActorCredits } from '@core/models/actor-credits.model';
import { CastMemberDetails } from '@core/models/cast-details.model';
import { Person } from '@core/models/person.model';
import { environment } from '@environments/environment';
import { ScrollItem } from '@shared/components/horizontal-scroll-list/scroll-item.model';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  id = signal(null);

  trendingMoviesResource = httpResource<ScrollItem[]>(() => `${environment.api.url}/trending/person/day`, {
    defaultValue: [],
    parse: (data) => {
      return (data as { results: Person[] }).results.map((show) => {
        return {
          imageUrl: show.profile_path ? `https://image.tmdb.org/t/p/w300${show.profile_path}` : null,
          name: show.name,
          link: `/person/${show.id}`,
        };
      });
    },
  });

  personDetailsResource = httpResource<CastMemberDetails>(() =>
    this.id() ? `${environment.api.url}/person/${this.id()}` : undefined,
  );

  movieCreditsResource = httpResource<ActorCredit[]>(
    () => (this.id() ? `${environment.api.url}/person/${this.id()}/movie_credits` : undefined),
    {
      defaultValue: [],
      parse: (data) => {
        return (data as ActorCredits).cast;
      },
    },
  );

  tvCreditsResource = httpResource<ActorCredit[]>(
    () => (this.id() ? `${environment.api.url}/person/${this.id()}/tv_credits` : undefined),
    {
      defaultValue: [],
      parse: (data) => {
        return (data as ActorCredits).cast;
      },
    },
  );
}
