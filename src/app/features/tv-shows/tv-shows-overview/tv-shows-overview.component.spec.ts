import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsOverviewComponent } from './tv-shows-overview.component';
import { TranslateModule } from '@ngx-translate/core';

describe('TvShowsOverviewComponent', () => {
  let component: TvShowsOverviewComponent;
  let fixture: ComponentFixture<TvShowsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowsOverviewComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TvShowsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
