import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceVisualizationComponent } from './race-visualization.component';

describe('RaceVisualizationComponent', () => {
  let component: RaceVisualizationComponent;
  let fixture: ComponentFixture<RaceVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceVisualizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
