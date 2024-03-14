import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceDetailsComponent } from './race-details.component';
import { RaceDataComponent } from './race-data/race-data.component';
import { PitStopsComponent } from './pit-stops/pit-stops.component';
import { LapTimesComponent } from './lap-times/lap-times.component';
import { SessionResultsComponent } from './session-results/session-results.component';

const routes: Routes = [
  {
    path: '',
    component: RaceDetailsComponent,
    children: [
      { path: '', component: RaceDataComponent },
      { path: 'pit-stops', component: PitStopsComponent },
      { path: 'lap-times', component: LapTimesComponent },
      { path: 'session-results', component: SessionResultsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaceDetailsRoutingModule {}
