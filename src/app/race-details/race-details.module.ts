import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceDetailsRoutingModule } from './race-details-routing.module';
import { RaceDataComponent } from './race-data/race-data.component';
import { LapTimesComponent } from './lap-times/lap-times.component';
import { PitStopsComponent } from './pit-stops/pit-stops.component';
import { RaceVisualizationComponent } from '../shared/race-visualization/race-visualization.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SessionResultsComponent } from './session-results/session-results.component';

@NgModule({
  declarations: [
    RaceDataComponent,
    LapTimesComponent,
    PitStopsComponent,
    RaceVisualizationComponent,
    SessionResultsComponent,
  ],
  imports: [CommonModule, RaceDetailsRoutingModule, NgxChartsModule],
})
export class RaceDetailsModule {}
