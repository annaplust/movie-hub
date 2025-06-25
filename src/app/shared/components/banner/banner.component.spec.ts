import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Movie } from '@core/models/movie.model';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { MockMovie } from '@mocks/movie.mock';
import { BannerComponent } from './banner.component';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'primeng/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BannerComponent,
        DatePipe,
        ButtonModule,
        FontAwesomeModule,
        CarouselModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have FontAwesome icons assigned', () => {
    expect(component.faChevronLeft).toEqual(faChevronLeft);
    expect(component.faChevronRight).toEqual(faChevronRight);
    expect(component.faStar).toEqual(faStar);
  });

  it('should accept movies input and render accordingly', () => {
    // Create dummy movies array
    const dummyMovies: Movie[] = MockMovie.getMovies();

    fixture.componentRef.setInput('movies', dummyMovies);
    fixture.detectChanges();

    // Check that carousel is rendered
    const carousel = fixture.debugElement.query(By.css('p-carousel'));
    expect(carousel).toBeTruthy();

    // Check that movie title is rendered
    const titleEl = fixture.debugElement.query(By.css('.title'));
    expect(titleEl.nativeElement.textContent).toContain(dummyMovies[0].title);
  });
});
