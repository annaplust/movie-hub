import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PeopleService } from '@core/services/people.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClapperboard, faStar, faTv } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
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
    SlicePipe,
    FontAwesomeModule,
    CommonModule,
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
   * Convert gender number to readable text
   * TMDB API uses: 0 = Not specified, 1 = Female, 2 = Male, 3 = Non-binary
   */
  getGenderText(gender: number): string {
    switch (gender) {
      case 1:
        return 'female';
      case 2:
        return 'male';
      case 3:
        return 'nonBinary';
      default:
        return 'notSpecified';
    }
  }

  /**
   * Combine movie and TV credits into a single sorted array
   */
  getCombinedCredits(movieCredits: any[], tvCredits: any[]): any[] {
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
        return -1;
      } else if (!a.date && b.date) {
        return 1;
      }

      // If years are equal or both null, sort by title
      return (a.title || '').localeCompare(b.title || '');
    });
  }

  /**
   * Optional: Get actor's most famous works (top rated/popular)
   */
  getMostFamousWorks(movieCredits: any[], tvCredits: any[], limit: number = 5): any[] {
    const allCredits = this.getCombinedCredits(movieCredits, tvCredits);

    // Sort by popularity/vote_average if available
    return allCredits
      .filter((credit) => credit.vote_average && credit.vote_average > 0)
      .sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0))
      .slice(0, limit);
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
