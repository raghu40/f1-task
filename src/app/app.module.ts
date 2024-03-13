import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RaceVisualizationComponent } from './shared/race-visualization/race-visualization.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LapTimesComponent } from './lap-times/lap-times.component';
import { PitStopsComponent } from './pit-stops/pit-stops.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceListComponent,
    RaceDetailsComponent,
    RaceVisualizationComponent,
    LapTimesComponent,
    PitStopsComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
