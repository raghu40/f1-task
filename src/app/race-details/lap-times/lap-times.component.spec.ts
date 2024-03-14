import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapTimesComponent } from './lap-times.component';

describe('LapTimesComponent', () => {
  let component: LapTimesComponent;
  let fixture: ComponentFixture<LapTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
