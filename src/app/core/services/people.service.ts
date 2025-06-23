import { httpResource } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ActorCredit, ActorCredits } from '@core/models/actor-credits.model';
import { CastMemberDetails } from '@core/models/cast-details.model';
import { Movie } from '@core/models/movie.model';
import { Person } from '@core/models/person.model';
import { TvShow } from '@core/models/tv-show.model';
import { environment } from '@environments/environment';
import { ScrollItem } from '@shared/components/horizontal-scroll-list/scroll-item.model';
import { buildImageUrl, buildProfileImageUrl } from '@utils/image-url';
import { LanguageService } from './language.service';

// Constants for better maintainability
const POSTER_SIZE = 'w300';
const PROFILE_SIZE = 'w300';

type ApiResponse<T> = { results: T[] };

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly languageService = inject(LanguageService);
  private readonly currentLanguage = this.languageService.currentLanguage;
  private readonly apiUrl = environment.api.url;

  // Public signals
  readonly selectedPersonId = signal<number | null>(null);

  // Computed values
  private readonly personEndpoint = computed(() =>
    this.selectedPersonId() ? `${this.apiUrl}/person/${this.selectedPersonId()}` : null,
  );

  // Trending people resources
  readonly trendingDayPeople = httpResource<ScrollItem[]>(
    () => `${this.apiUrl}/trending/person/day?language=${this.currentLanguage()}`,
    {
      defaultValue: [],
      parse: (data) => this.parsePeopleResults(data as ApiResponse<Person>),
    },
  );

  // Person details resources
  readonly personDetails = httpResource<CastMemberDetails | undefined>(
    () => {
      const endpoint = this.personEndpoint();
      return endpoint ? `${endpoint}?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: undefined,
      parse: (data) => this.parsePersonDetails(data as CastMemberDetails),
    },
  );

  readonly personMovieCredits = httpResource<ActorCredit[]>(
    () => {
      const endpoint = this.personEndpoint();
      return endpoint ? `${endpoint}/movie_credits?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: [],
      parse: (data) => this.parseCredits(data as ActorCredits),
    },
  );

  readonly personTvCredits = httpResource<ActorCredit[]>(
    () => {
      const endpoint = this.personEndpoint();
      return endpoint ? `${endpoint}/tv_credits?language=${this.currentLanguage()}` : undefined;
    },
    {
      defaultValue: [],
      parse: (data) => this.parseCredits(data as ActorCredits),
    },
  );

  // Public methods
  setSelectedPersonId(id: number | null): void {
    this.selectedPersonId.set(id);
  }

  // Private parsing methods
  private parsePeopleResults(data: ApiResponse<Person>): ScrollItem[] {
    return data.results.map((person) => ({
      imageUrl: buildProfileImageUrl(person.profile_path),
      name: person.name,
      link: `/person/${person.id}`,
    }));
  }

  private parsePersonDetails(details: CastMemberDetails): CastMemberDetails {
    return {
      ...details,
      profile_path: buildProfileImageUrl(details.profile_path, POSTER_SIZE),
    };
  }

  private parseCredits(credits: ActorCredits): ActorCredit[] {
    return (
      credits.cast?.map((credit) => ({
        ...credit,
        poster_path: buildImageUrl(credit.poster_path, POSTER_SIZE),
      })) ?? []
    );
  }
}
