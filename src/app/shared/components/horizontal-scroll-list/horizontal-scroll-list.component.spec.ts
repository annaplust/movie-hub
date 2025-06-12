import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollListComponent } from './horizontal-scroll-list.component';

describe('HorizontalScrollListComponent', () => {
  let component: HorizontalScrollListComponent;
  let fixture: ComponentFixture<HorizontalScrollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalScrollListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalScrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
