import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '@core/services/people.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-actor-details',
  imports: [TranslateModule],
  templateUrl: './actor-details.component.html',
  styleUrl: './actor-details.component.scss',
})
export class ActorDetailsComponent implements OnInit {
  private peopleService = inject(PeopleService);
  private route = inject(ActivatedRoute);

  // Resources
  actorDetailsResource = this.peopleService.personDetailsResource;
  movieCreditsResource = this.peopleService.movieCreditsResource;
  tvCreditsResource = this.peopleService.tvCreditsResource;

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.peopleService.id.set(routeParams['id']);
    });
  }
}
