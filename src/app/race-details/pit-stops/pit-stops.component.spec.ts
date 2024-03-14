import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitStopsComponent } from './pit-stops.component';

describe('PitStopsComponent', () => {
  let component: PitStopsComponent;
  let fixture: ComponentFixture<PitStopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PitStopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PitStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
