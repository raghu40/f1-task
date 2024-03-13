import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RaceService } from '../shared/race.service';
import { ErgastApiResponse, Lap, graphData } from '../shared/race.model';

@Component({
  selector: 'app-lap-times',
  templateUrl: './lap-times.component.html',
  styleUrls: ['./lap-times.component.scss']
})
export class LapTimesComponent {
  lapTimesData: graphData[] = [];
  year!: number;
  round!: number;
  
  constructor(private route: ActivatedRoute, private raceService: RaceService, ){
    this.route.params.subscribe(params => {
       this.year = +params['year'];
       this.round = +params['round'];
       let driverId = params['driverId']
      this.fetchLapTimes(this.year, this.round, driverId);
    });
  }

  fetchLapTimes(year: number, round: number, driverId:string): void {
    this.raceService.getLapTimes(year, round, driverId)
      .subscribe((data: ErgastApiResponse) => {
        
        let lapTimes = data.MRData.RaceTable.Races[0]?.Laps ?? [];
        let lapData:any = {};
         lapData['name'] = driverId;
         
         let jsonFormat = lapTimes?.map((lap: Lap) => {
          return {
            name: lap.number,
            value: +lap.Timings[0].time.replace(':', '') // Convert time to number for sorting purposes
          };
        });
        lapData['series'] = jsonFormat;
        
        this.lapTimesData = (lapTimes.length > 0) ?  [lapData] : [];
      });
  }



}
