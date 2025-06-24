import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ActorMovieCredit, ActorTvShowCredit } from '@core/models/actor-credits.model';
import { PeopleService } from '@core/services/people.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClapperboard, faStar, faTv } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import { ExternalLinksComponent } from '@shared/components/external-links/external-links.component';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-actor-details',
  imports: [
    TranslateModule,
    RouterModule,
    TableModule,
    HorizontalScrollListComponent,
    DatePipe,
    FontAwesomeModule,
    CommonModule,
    ExternalLinksComponent,
  ],
  templateUrl: './actor-details.component.html',
  styleUrl: './actor-details.component.scss',
})
export class ActorDetailsComponent implements OnInit {
  private peopleService = inject(PeopleService);
  private route = inject(ActivatedRoute);

  // Resources
  actorDetailsResource = this.peopleService.personDetails;
  movieCreditsResource = this.peopleService.personMovieCredits;
  tvCreditsResource = this.peopleService.personTvCredits;
  personExternalIds = this.peopleService.personExternalIds;

  // Icons
  faStar = faStar;
  faClapperboard = faClapperboard;
  faTv = faTv;

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.peopleService.selectedPersonId.set(routeParams['id']);
    });
  }

  /**
   * Combine movie and TV credits into a single sorted array
   */
  getCombinedCredits(movieCredits: ActorMovieCredit[], tvCredits: ActorTvShowCredit[]): any[] {
    const combined: any[] = [];

    // Add movie credits
    if (movieCredits) {
      movieCredits.forEach((movie) => {
        combined.push({
          id: movie.id,
          title: movie.title,
          character: movie.character,
          date: movie.release_date ? new Date(movie.release_date) : null,
          type: 'movie',
          release_date: movie.release_date,
          poster_path: movie.poster_path,
          popularity: movie.popularity,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
        });
      });
    }

    // Add TV credits
    if (tvCredits) {
      tvCredits.forEach((tv) => {
        combined.push({
          id: tv.id,
          title: tv.name,
          character: tv.character,
          date: tv.first_air_date ? new Date(tv.first_air_date) : null,
          type: 'tv',
          release_date: tv.first_air_date,
          poster_path: tv.poster_path,
          popularity: tv.popularity,
          vote_average: tv.vote_average,
          vote_count: tv.vote_count,
        });
      });
    }

    // Sort by year (most recent first), then by title
    return combined.sort((a, b) => {
      if (a.date && b.date) {
        if (a.date !== b.date) {
          return b.date - a.date; // Descending order
        }
      } else if (a.date && !b.date) {
        return 1;
      } else if (!a.date && b.date) {
        return -1;
      }

      // If years are equal or both null, sort by title
      return (a.title || '').localeCompare(b.title || '');
    });
  }

  /**
   * Calculate age based on birthday and optional deathday
   */
  calculateAge(birthday: string, deathday: string | null): number {
    const birthDate = new Date(birthday);
    const endDate = deathday ? new Date(deathday) : new Date();

    let age = endDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = endDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && endDate.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  /**
   * Optional: Get actor's most famous works (top rated/popular)
   */
  getMostFamousWorks(movieCredits: ActorMovieCredit[], tvCredits: ActorTvShowCredit[], limit: number = 5): any[] {
    const allCredits = this.getCombinedCredits(movieCredits, tvCredits);

    // Filter out credits without vote_average or vote_count
    const validCredits = allCredits.filter((credit) => credit.vote_average > 0 && credit.vote_count > 0);

    if (validCredits.length === 0) return [];

    // Compute min and max for normalization
    const voteCountValues = validCredits.map((c) => c.vote_count);
    const popularityValues = validCredits.map((c) => c.popularity);
    const orderValues = validCredits.map((c) => (typeof c.order === 'number' ? c.order : 0));

    const minVoteCount = Math.min(...voteCountValues);
    const maxVoteCount = Math.max(...voteCountValues);
    const minPopularity = Math.min(...popularityValues);
    const maxPopularity = Math.max(...popularityValues);
    const maxOrder = Math.max(...orderValues);

    // Helper to normalize between 0 and 1
    const normalize = (value: number, min: number, max: number) => {
      if (max === min) return 0.5; // avoid division by zero, neutral score
      return (value - min) / (max - min);
    };

    // Calculate combined score for each credit
    validCredits.forEach((credit) => {
      const voteCountNorm = normalize(credit.vote_count, minVoteCount, maxVoteCount);
      const voteAverageNorm = credit.vote_average / 10; // TMDb ratings are 0-10
      const popularityNorm = normalize(credit.popularity, minPopularity, maxPopularity);
      const billingOrderNorm = maxOrder > 0 ? 1 - credit.order / maxOrder : 0.5;

      credit._knownForScore =
        voteCountNorm * 0.4 + voteAverageNorm * 0.3 + popularityNorm * 0.2 + billingOrderNorm * 0.1;
    });

    // Sort by combined score descending and return top results
    return validCredits.sort((a, b) => b._knownForScore - a._knownForScore).slice(0, limit);
  }

  /**
   * Optional: Format biography with read more/less functionality
   */
  formatBiography(biography: string, maxLength: number = 300): { text: string; isTruncated: boolean } {
    if (!biography) {
      return { text: '', isTruncated: false };
    }

    if (biography.length <= maxLength) {
      return { text: biography, isTruncated: false };
    }

    // Find the last complete sentence within the limit
    const truncated = biography.substring(0, maxLength);
    const lastSentenceEnd = Math.max(
      truncated.lastIndexOf('.'),
      truncated.lastIndexOf('!'),
      truncated.lastIndexOf('?'),
    );

    const cutPoint = lastSentenceEnd > maxLength * 0.7 ? lastSentenceEnd + 1 : maxLength;

    return {
      text: biography.substring(0, cutPoint).trim(),
      isTruncated: true,
    };
  }

  /**
   * Optional: Get unique departments the actor worked in
   */
  getUniqueDepartments(movieCredits: any[], tvCredits: any[]): string[] {
    const departments = new Set<string>();

    // Check movie crew roles
    if (movieCredits) {
      movieCredits.forEach((credit) => {
        if (credit.department) {
          departments.add(credit.department);
        }
      });
    }

    // Check TV crew roles
    if (tvCredits) {
      tvCredits.forEach((credit) => {
        if (credit.department) {
          departments.add(credit.department);
        }
      });
    }

    return Array.from(departments);
  }
}
