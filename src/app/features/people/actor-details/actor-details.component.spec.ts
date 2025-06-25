import { CommonModule, DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ActorTvShowCredit } from '@core/models/actor-credits.model';
import { CastMemberDetails } from '@core/models/cast-details.model';
import { PeopleService } from '@core/services/people.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MockActorCredits } from '@mocks/actor-credits.mock';
import { MockCastMemberDetails } from '@mocks/cast-member-details.mock';
import { createMockResource } from '@mocks/resource.mock';
import { TranslateModule } from '@ngx-translate/core';
import { ExternalLinksComponent } from '@shared/components/external-links/external-links.component';
import { HorizontalScrollListComponent } from '@shared/components/horizontal-scroll-list/horizontal-scroll-list.component';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { BehaviorSubject, of } from 'rxjs';
import { ActorDetailsComponent } from './actor-details.component';

describe('ActorDetailsComponent', () => {
  let component: ActorDetailsComponent;
  let fixture: ComponentFixture<ActorDetailsComponent>;

  // Mock PeopleService
  const mockPersonDetails = createMockResource<CastMemberDetails | null>(MockCastMemberDetails.getPerson(), true);
  const mockPersonMovieCredits = createMockResource([], true);
  const mockPersonTvCredits = createMockResource([], true);
  const mockPersonExternalIds = createMockResource(null, true);
  const selectedPersonIdSubject = new BehaviorSubject<string>('123');

  const mockPeopleService = {
    personDetails: mockPersonDetails,
    personMovieCredits: mockPersonMovieCredits,
    personTvCredits: mockPersonTvCredits,
    personExternalIds: mockPersonExternalIds,
    selectedPersonId: {
      set: jasmine.createSpy('set'),
      get: () => selectedPersonIdSubject.value,
    },
  };

  const mockActivatedRoute = {
    params: of({ id: '123' }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ActorDetailsComponent, // standalone component
        TranslateModule.forRoot(),
        FontAwesomeModule,
        SkeletonModule,
        TableModule,
        CommonModule,
        DatePipe,
        ExternalLinksComponent,
        HorizontalScrollListComponent,
      ],
      providers: [
        { provide: PeopleService, useValue: mockPeopleService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ActorDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component and set selectedPersonId on init', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(mockPeopleService.selectedPersonId.set).toHaveBeenCalledWith('123');
  });

  it('should show skeleton when actor details are loading', () => {
    mockPersonDetails.setLoading(true);
    mockPersonDetails.setValue(null);
    fixture.detectChanges();

    const skeleton = fixture.debugElement.query(By.css('p-skeleton'));
    expect(skeleton).toBeTruthy();

    const img = fixture.debugElement.query(By.css('.hero__portrait'));
    expect(img).toBeFalsy();
  });

  it('should show actor image and name when data is loaded', () => {
    mockPersonDetails.setLoading(false);
    mockPersonDetails.setValue(MockCastMemberDetails.getPerson());
    fixture.detectChanges();

    const img = fixture.debugElement.query(By.css('.hero__portrait'));
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toContain('/profile-path.jpg');
    expect(img.nativeElement.alt).toBe('John Doe');

    const nameEl = fixture.debugElement.query(By.css('.hero__name'));
    expect(nameEl.nativeElement.textContent).toContain('John Doe');

    const professionEl = fixture.debugElement.query(By.css('.hero__profession'));
    expect(professionEl.nativeElement.textContent).toContain('Acting');

    const bioEl = fixture.debugElement.query(By.css('.hero__bio'));
    expect(bioEl.nativeElement.textContent).toContain('This is a sample biography of the cast member.');
  });

  it('should calculate age correctly', () => {
    const birthday = '1980-01-01';
    const deathday = null;
    const age = component.calculateAge(birthday, deathday);
    const expectedAge = new Date().getFullYear() - 1980;
    expect(age).toBe(expectedAge);
  });

  it('should combine and sort credits correctly', () => {
    const movieCredits = MockActorCredits.getActorMovieCredits().splice(0, 1);
    const tvCredits = MockActorCredits.getActorTvCredits().splice(0, 1);

    const combined = component.getCombinedCredits(movieCredits, tvCredits);

    expect(combined.length).toBe(2);
    expect(combined[0].title).toBe(movieCredits[0].title); // Newer date first
    expect(combined[1].title).toBe(tvCredits[0].name);
  });

  it('should get most famous works sorted by score', () => {
    const movieCredits = MockActorCredits.getActorMovieCredits();
    const tvCredits: ActorTvShowCredit[] = [];

    const famousWorks = component.getMostFamousWorks(movieCredits, tvCredits, 2);

    expect(famousWorks.length).toBe(2);
    expect(famousWorks[0].title).toBe(movieCredits[1].title); // Higher score first
  });
});
