import { HttpClientTestingModule } from '@angular/common/http/testing';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';
import { LanguageService } from './language.service';
import { TvService } from './tv.service';

describe('TvService', () => {
  let service: TvService;
  let languageServiceMock: Partial<LanguageService>;

  beforeEach(() => {
    languageServiceMock = {
      currentLanguage: signal('en-US'),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvService, { provide: LanguageService, useValue: languageServiceMock }],
    });

    service = TestBed.inject(TvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have null selectedTvShowId initially', () => {
    expect(service.selectedTvShowId()).toBeNull();
  });

  it('should set selectedTvShowId correctly', () => {
    service.setSelectedTvShowId(123);
    expect(service.selectedTvShowId()).toBe(123);
  });

  describe('computed tvEndpoint', () => {
    it('should be null if selectedTvShowId is null', () => {
      service.setSelectedTvShowId(null);
      expect(service['tvEndpoint']()).toBeNull();
    });

    it('should construct correct tvEndpoint url when selectedTvShowId is set', () => {
      service.setSelectedTvShowId(42);
      expect(service['tvEndpoint']()).toBe(`${environment.api.url}/tv/42`);
    });
  });

  describe('parseTvShowResults', () => {
    it('should map results and build image URLs', () => {
      const data = {
        results: [{ poster_path: 'poster1.jpg', backdrop_path: 'backdrop1.jpg', id: 1, name: 'Show1' }],
      } as any;

      const parsed = service['parseTvShowResults'](data);
      expect(parsed[0].poster_path).toContain('w300poster1.jpg');
      expect(parsed[0].backdrop_path).toContain('w1280backdrop1.jpg');
    });
  });

  describe('parseTvShowDetails', () => {
    it('should build image URLs and join names', () => {
      const details = {
        poster_path: 'poster.jpg',
        backdrop_path: 'backdrop.jpg',
        production_companies: [{ name: 'Company1' }, { name: 'Company2' }],
        production_countries: [{ name: 'Country1' }, { name: 'Country2' }],
        created_by: [{ name: 'Creator1' }],
        networks: [{ name: 'Network1' }, { name: 'Network2' }],
      } as any;

      const parsed = service['parseTvShowDetails'](details);

      expect(parsed.poster_path).toContain('w300poster.jpg');
      expect(parsed.backdrop_path).toContain('w1280backdrop.jpg');
      expect(parsed.production_companies_names).toBe('Company1, Company2');
      expect(parsed.production_countries_names).toBe('Country1, Country2');
      expect(parsed.created_by_names).toBe('Creator1');
      expect(parsed.networks_names).toBe('Network1, Network2');
    });

    it('should handle missing arrays gracefully', () => {
      const details = {} as any;
      const parsed = service['parseTvShowDetails'](details);

      expect(parsed.production_companies_names).toBe('');
      expect(parsed.production_countries_names).toBe('');
      expect(parsed.created_by_names).toBe('');
      expect(parsed.networks_names).toBe('');
    });
  });

  describe('parseCredits', () => {
    it('should normalize cast and filter/normalize crew', () => {
      const credits = {
        cast: [{ profile_path: 'cast1.jpg', name: 'Actor1' }],
        crew: [
          { job: 'Producer', profile_path: 'crew1.jpg' },
          { job: 'Director', profile_path: 'crew2.jpg' },
          { job: 'RandomJob', profile_path: 'crew3.jpg' },
        ],
      } as any;

      const parsed = service['parseCredits'](credits);

      expect(parsed.cast[0].profile_path).toContain('w276_and_h350_facecast1.jpg');

      expect(parsed.crew.length).toBe(2); // 'RandomJob' filtered out
      expect(parsed.crew[0].job).toBe('director');
      expect(parsed.crew[1].job).toBe('producer');
      expect(parsed.crew[0].profile_path).toContain('w276_and_h350_facecrew2.jpg');
      expect(parsed.crew[1].profile_path).toContain('w276_and_h350_facecrew1.jpg');
    });
  });
});
