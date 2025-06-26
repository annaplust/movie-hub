import { Component, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TvService } from '@core/services/tv.service';
import { MediaDetailsConfig } from '@shared/models/media.details.config';
import { TvShowDetailsComponent } from './tv-show-details.component';

fdescribe('TvShowDetailsComponent', () => {
  let component: TvShowDetailsComponent;
  let fixture: ComponentFixture<TvShowDetailsComponent>;

  const mockTvService = jasmine.createSpyObj('TvService', ['trendingDayTvShows']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowDetailsComponent, MockMediaDetailsComponent],
      providers: [{ provide: TvService, useValue: mockTvService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TvShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-media-details',
  template: '',
})
class MockMediaDetailsComponent {
  config = input.required<MediaDetailsConfig>();
}
