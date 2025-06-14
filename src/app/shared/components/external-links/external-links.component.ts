import { Component, input } from '@angular/core';
import { ExternalIds } from '@core/models/external-ids.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-external-links',
  imports: [FontAwesomeModule],
  templateUrl: './external-links.component.html',
  styleUrl: './external-links.component.scss',
})
export class ExternalLinksComponent {
  ids = input.required<ExternalIds>();

  // Icons
  faImdb = faImdb;
}
