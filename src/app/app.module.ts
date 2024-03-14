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

import { RaceDetailsModule } from './race-details/race-details.module';
import { RaceDetailsRoutingModule } from './race-details/race-details-routing.module';

@NgModule({
  declarations: [AppComponent, RaceListComponent, RaceDetailsComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    RaceDetailsModule,
    RaceDetailsRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
