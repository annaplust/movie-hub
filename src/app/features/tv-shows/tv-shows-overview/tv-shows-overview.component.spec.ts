import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsOverviewComponent } from './tv-shows-overview.component';

describe('TvShowsOverviewComponent', () => {
  let component: TvShowsOverviewComponent;
  let fixture: ComponentFixture<TvShowsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowsOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
