import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErgastApiResponse, Race } from 'src/app/shared/race.model';
import { RaceService } from 'src/app/shared/race.service';

@Component({
  selector: 'app-race-data',
  templateUrl: './race-data.component.html',
  styleUrls: ['./race-data.component.scss'],
})
export class RaceDataComponent {
  raceDetails!: Race;
  lapTimes!: Race[];
  loadindData: boolean = true;
  year!: number;
  round!: number;

  constructor(
    private route: ActivatedRoute,
    private raceService: RaceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRaceDetails();
  }

  getRaceDetails(): void {
    const yearParam = this.route.snapshot.paramMap.get('year');
    const roundParam = this.route.snapshot.paramMap.get('round');
    this.loadindData = true;
    if (yearParam && roundParam) {
      this.year = +yearParam;
      this.round = +roundParam;

      this.raceService.getRaceDetails(this.year, this.round).subscribe(
        (data: ErgastApiResponse) => {
          this.raceDetails = data.MRData.RaceTable.Races[0];
          this.loadindData = false;
        },
        (error) => {
          this.loadindData = false;
        }
      );
    } else {
      console.error('Year and round parameters are missing.');
    }
  }
}
