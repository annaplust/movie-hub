import { CurrencyPipe, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Genre, GenreTranslationMap } from '@core/models/genre.model';
import { MediaType } from '@core/models/media-type.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { createMockResource } from '@mocks/resource.mock';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { Subject } from 'rxjs';
import { ExternalLinksComponent } from '../external-links/external-links.component';
import { HorizontalScrollListComponent } from '../horizontal-scroll-list/horizontal-scroll-list.component';
import { MediaDetailsComponent } from './media-details.component';

describe('MediaDetailsComponent', () => {
  let component: MediaDetailsComponent;
  let fixture: ComponentFixture<MediaDetailsComponent>;
  let routeParamsSubject: Subject<any>;

  // Create mock resources using createMockResource
  const movieDetailsResource = createMockResource('movieDetailsValue');
  const movieCreditsResource = createMockResource('movieCreditsValue');
  const movieRecommendationsResource = createMockResource('movieRecommendationsValue');
  const movieExternalIdsResource = createMockResource('movieExternalIdsValue');

  const tvDetailsResource = createMockResource('tvDetailsValue');
  const tvCreditsResource = createMockResource('tvCreditsValue');
  const tvRecommendationsResource = createMockResource('tvRecommendationsValue');
  const tvExternalIdsResource = createMockResource('tvExternalIdsValue');

  // Mock service using these resources
  const mockService = {
    movieDetails: movieDetailsResource,
    movieCredits: movieCreditsResource,
    movieRecommendations: movieRecommendationsResource,
    movieExternalIds: movieExternalIdsResource,
    tvDetails: tvDetailsResource,
    tvCredits: tvCreditsResource,
    tvRecommendations: tvRecommendationsResource,
    tvExternalIds: tvExternalIdsResource,
    setSelectedMovieId: jasmine.createSpy('setSelectedMovieId'),
    setSelectedTvShowId: jasmine.createSpy('setSelectedTvShowId'),
  };

  beforeEach(async () => {
    routeParamsSubject = new Subject();

    await TestBed.configureTestingModule({
      imports: [
        MediaDetailsComponent,
        HorizontalScrollListComponent,
        TranslateModule.forRoot(),
        TableModule,
        ExternalLinksComponent,
        DatePipe,
        FontAwesomeModule,
        CurrencyPipe,
        SkeletonModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: routeParamsSubject.asObservable(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.config = {
      type: MediaType.MOVIE,
      service: mockService,
      routeParam: 'id',
      titleField: 'title',
      dateField: 'release_date',
      dateLabel: 'Release Date',
      route: '/movie',
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('dynamic getters', () => {
    beforeEach(() => {
      component.config = {
        type: MediaType.MOVIE,
        service: mockService,
        routeParam: 'id',
        titleField: 'title',
        dateField: 'release_date',
        dateLabel: 'Release Date',
        route: '/movie',
      };
    });

    it('should return correct movieDetails', () => {
      expect(component.mediaDetails).toBe(mockService.movieDetails);
    });

    it('should return correct movieCredits', () => {
      expect(component.mediaCredits).toBe(mockService.movieCredits);
    });

    it('should return correct movieRecommendations', () => {
      expect(component.mediaRecommendations).toBe(mockService.movieRecommendations);
    });

    it('should return correct movieExternalIds', () => {
      expect(component.mediaExternalIds).toBe(mockService.movieExternalIds);
    });

    it('should return correct tvDetails when type is TV', () => {
      component.config.type = MediaType.TV;
      expect(component.mediaDetails).toBe(mockService.tvDetails);
    });

    it('should return correct tvCredits when type is TV', () => {
      component.config.type = MediaType.TV;
      expect(component.mediaCredits).toBe(mockService.tvCredits);
    });

    it('should return correct tvRecommendations when type is TV', () => {
      component.config.type = MediaType.TV;
      expect(component.mediaRecommendations).toBe(mockService.tvRecommendations);
    });

    it('should return correct tvExternalIds when type is TV', () => {
      component.config.type = MediaType.TV;
      expect(component.mediaExternalIds).toBe(mockService.tvExternalIds);
    });
  });

  describe('ngOnInit behavior', () => {
    beforeEach(() => {
      component.config = {
        type: MediaType.MOVIE,
        service: mockService,
        routeParam: 'id',
        titleField: 'title',
        dateField: 'release_date',
        dateLabel: 'Release Date',
        route: '/movie',
      };
      fixture.detectChanges();
    });

    it('should call setSelectedMovieId with route param if type is MOVIE', () => {
      routeParamsSubject.next({ id: 42 });
      expect(mockService.setSelectedMovieId).toHaveBeenCalledWith(42);
      expect(mockService.setSelectedTvShowId).not.toHaveBeenCalled();
    });
  });

  describe('component properties', () => {
    it('should have Genre and GenreTranslationMap properties', () => {
      expect(component.Genre).toBe(Genre);
      expect(component.GenreTranslationMap).toBe(GenreTranslationMap);
    });

    it('should have faStar icon assigned', () => {
      expect(component.faStar).toBe(faStar);
    });
  });
});
