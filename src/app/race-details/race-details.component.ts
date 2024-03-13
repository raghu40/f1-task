import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RaceService } from '../shared/race.service';
import { ErgastApiResponse, Race } from '../shared/race.model';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss'],
})
export class RaceDetailsComponent {
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
          console.log(data.MRData.RaceTable.Races[0]);
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
