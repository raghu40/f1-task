import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErgastApiResponse, graphData, pitStop } from 'src/app/shared/race.model';
import { RaceService } from 'src/app/shared/race.service';

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
      // Calling fetchPitStops method with year and round
      this.fetchPitStops(year, round);
    });
  }

  // Method to fetch pit stop data
  fetchPitStops(year: number, round: number): void {
   
    let pitStopData: {
      [driver: string]: {
        name: string;
        series: { name: string; value: number }[];
      };
    } = {};

    // Calling RaceService method to get pit stop data
    this.raceService.getPitStops(year, round).subscribe((data: ErgastApiResponse) => {
      
      let pitStops = data.MRData.RaceTable.Races[0]?.PitStops ?? [];
      
      pitStops?.forEach((item: pitStop) => {
        
        if (!pitStopData[item.driverId]) {
          pitStopData[item.driverId] = { name: item.driverId, series: [] };
        }
       
        pitStopData[item.driverId].series.push({
          name: item.lap,
          value: this.raceService.timeStringToMilliseconds(item.duration),
        });
      });
      
      this.displayPitData = Object.values(pitStopData);
    });
  }
}
