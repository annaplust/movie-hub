import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from '@core/services/movies.service';
import { createMockResource } from '@mocks/resource.mock';
import { MoviesOverviewComponent } from './movies-overview.component';
import { TranslateModule } from '@ngx-translate/core';

describe('MoviesOverviewComponent', () => {
  let component: MoviesOverviewComponent;
  let fixture: ComponentFixture<MoviesOverviewComponent>;

  const trendingDayMoviesResource = createMockResource([]);
  const upcomingMoviesResource = createMockResource([]);
  const nowPlayingMoviesResource = createMockResource([]);

  const mockMoviesService = {
    trendingDayMovies: trendingDayMoviesResource,
    upcomingMovies: upcomingMoviesResource,
    nowPlayingMovies: nowPlayingMoviesResource,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesOverviewComponent, TranslateModule.forRoot()],
      providers: [{ provide: MoviesService, useValue: mockMoviesService }],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
