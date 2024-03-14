import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ErgastApiResponse,
  Lap,
  Timing,
  graphData,
  seriesData,
} from 'src/app/shared/race.model';
import { RaceService } from 'src/app/shared/race.service';

@Component({
  selector: 'app-lap-times',
  templateUrl: './lap-times.component.html',
  styleUrls: ['./lap-times.component.scss'],
})
export class LapTimesComponent {
  lapTimesData: graphData[] = [];

  year!: number;
  round!: number;

  constructor(private route: ActivatedRoute, private raceService: RaceService) {
    this.route.parent?.params.subscribe((params) => {
      this.year = +params['year'];
      this.round = +params['round'];

      this.fetchLapTimes(this.year, this.round);
    });
  }

  // Method to fetch lap times data from the API
  fetchLapTimes(year: number, round: number): void {
    let raceData: {
      [driver: string]: {
        name: string;
        series: { name: string; value: number }[];
      };
    } = {};

    // Call the getLapTimes method of RaceService to fetch lap times data
    this.raceService
      .getLapTimes(year, round)
      .subscribe((data: ErgastApiResponse) => {
        let lapTimes = data.MRData.RaceTable.Races[0]?.Laps ?? [];

        // Process lap times data for each lap
        lapTimes?.forEach((item: Lap) => {
          const timings: seriesData[] = [];

          item.Timings.forEach((lapData: Timing) => {
            const lapTime = this.raceService.timeStringToMilliseconds(
              lapData.time
            );

            timings.push({ name: lapData.driverId, value: lapTime });
          });

          this.lapTimesData.push({
            name: `Race ${item.number}`,
            series: timings,
          });
        });

        // Update lapTimesData array with the processed lap times data
        this.lapTimesData = this.lapTimesData;
      });
  }
}
