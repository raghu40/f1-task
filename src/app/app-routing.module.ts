import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { LapTimesComponent } from './lap-times/lap-times.component';
import { PitStopsComponent } from './pit-stops/pit-stops.component';

const routes: Routes = [
  { path: '', redirectTo: '/race-list', pathMatch: 'full' },
  { path: 'race-list', component: RaceListComponent },
  {
    path: 'race-details/:year/:round',
    component: RaceDetailsComponent,
    children: [{ path: 'pit-stops', component: PitStopsComponent }],
  },
  { path: 'lap-time/:year/:round/:driverId', component: LapTimesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
