import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchService } from '@core/services/search.service';

@Component({
  selector: 'app-search-results',
  imports: [RouterModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit {
  private searchService = inject(SearchService);
  private route = inject(ActivatedRoute);

  // Resources
  multiSearchResource = this.searchService.multiSearchResource;

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.searchService.searchPhase.set(routeParams['phrase']);
    });
  }
}
