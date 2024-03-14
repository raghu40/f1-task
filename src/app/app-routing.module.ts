import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceDetailsComponent } from './race-details/race-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/race-list', pathMatch: 'full' },
  { path: 'race-list', component: RaceListComponent },
  {
    path: 'race-details/:year/:round',
    loadChildren: () =>
      import('./race-details/race-details.module').then(
        (m) => m.RaceDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
