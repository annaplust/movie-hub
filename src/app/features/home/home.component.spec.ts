import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MoviesService } from '@core/services/movies.service';
import { of, BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // Mock MoviesService
  const trendingMoviesSubject = new BehaviorSubject<any[]>([]);
  const nowPlayingMoviesSubject = new BehaviorSubject<any[]>([]);
  const upcomingMoviesSubject = new BehaviorSubject<any[]>([]);

  const trendingLoadingSubject = new BehaviorSubject<boolean>(true);
  const nowPlayingLoadingSubject = new BehaviorSubject<boolean>(true);
  const upcomingLoadingSubject = new BehaviorSubject<boolean>(true);

  const mockMoviesService = {
    trendingWeekMovies: {
      value: () => trendingMoviesSubject.value,
      isLoading: () => trendingLoadingSubject.value,
      subscribe: trendingMoviesSubject.subscribe.bind(trendingMoviesSubject),
    },
    nowPlayingMovies: {
      value: () => nowPlayingMoviesSubject.value,
      isLoading: () => nowPlayingLoadingSubject.value,
      subscribe: nowPlayingMoviesSubject.subscribe.bind(nowPlayingMoviesSubject),
    },
    upcomingMovies: {
      value: () => upcomingMoviesSubject.value,
      isLoading: () => upcomingLoadingSubject.value,
      subscribe: upcomingMoviesSubject.subscribe.bind(upcomingMoviesSubject),
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        TranslateModule.forRoot(),
        SkeletonModule,
        ButtonModule,
        BannerComponent,
        RouterTestingModule,
        HorizontalScrollListComponent,
      ],
      providers: [{ provide: MoviesService, useValue: mockMoviesService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show skeleton loader when trending movies are loading', () => {
    trendingLoadingSubject.next(true);
    trendingMoviesSubject.next([]);

    fixture.detectChanges();

    const skeleton = fixture.debugElement.query(By.css('p-skeleton'));
    expect(skeleton).toBeTruthy();

    const banner = fixture.debugElement.query(By.css('app-banner'));
    expect(banner).toBeFalsy();
  });

  xit('should show banner when trending movies are loaded', () => {
    trendingLoadingSubject.next(false);
    trendingMoviesSubject.next([
      {
        id: 1,
        title: 'Test Movie',
        backdrop_path: 'backdrop.jpg',
        genre_ids: [1, 2],
        release_date: '2025-01-01',
        overview: 'Overview',
        vote_average: 8.5,
      },
    ]);

    fixture.detectChanges();

    const skeleton = fixture.debugElement.query(By.css('p-skeleton'));
    expect(skeleton).toBeFalsy();

    const banner = fixture.debugElement.query(By.css('app-banner'));
    expect(banner).toBeTruthy();
    expect(banner.componentInstance.movies.length).toBe(1);
  });
});
