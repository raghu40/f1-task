import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../shared/race.service';
import { ErgastApiResponse, graphData, pitStop } from '../shared/race.model';

@Component({
  selector: 'app-pit-stops',
  templateUrl: './pit-stops.component.html',
  styleUrls: ['./pit-stops.component.scss'],
})
export class PitStopsComponent {
  displayPitData: graphData[] = [];
  constructor(private route: ActivatedRoute, private raceService: RaceService) {
    this.route.parent?.params.subscribe((params) => {
      let year = +params['year'];
      let round = +params['round'];
      this.fetchPitStops(year, round);
    });
  }

  fetchPitStops(year: number, round: number): void {
    let pitStopData: {
      [driver: string]: {
        name: string;
        series: { name: string; value: number }[];
      };
    } = {};
    this.raceService
      .getPitStops(year, round)
      .subscribe((data: ErgastApiResponse) => {
        let pitStop = data.MRData.RaceTable.Races[0]?.PitStops ?? [];
        pitStop?.forEach((item: pitStop) => {
          if (!pitStopData[item.driverId]) {
            pitStopData[item.driverId] = { name: item.driverId, series: [] };
          }
          // Add data to the series for the corresponding driver
          pitStopData[item.driverId].series.push({
            name: item.lap,
            value: +item.duration,
          });
        });

        this.displayPitData = Object.values(pitStopData);
      });
  }
}
