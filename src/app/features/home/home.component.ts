import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { TvShowsOverviewComponent } from './components/tv-shows-overview/tv-shows-overview.component';
import { MoviesOverviewComponent } from './components/movies-overview/movies-overview.component';

@Component({
  selector: 'app-home',
  imports: [TabsModule, MoviesOverviewComponent, TvShowsOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
