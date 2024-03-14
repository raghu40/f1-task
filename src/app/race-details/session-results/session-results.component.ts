import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErgastApiResponse, Race } from 'src/app/shared/race.model';
import { RaceService } from 'src/app/shared/race.service';

@Component({
  selector: 'app-session-results',
  templateUrl: './session-results.component.html',
  styleUrls: ['./session-results.component.scss'],
})
export class SessionResultsComponent {
  sessionDetails!: Race;
  loadindData: boolean = true;
  year!: number;
  round!: number;

  constructor(
    private route: ActivatedRoute,
    private raceService: RaceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params) => {
      this.year = +params['year'];
      this.round = +params['round'];
      this.getSessionDetails(this.year, this.round);
    });
  }

  getSessionDetails(year: number, round: number): void {
    this.raceService.getSessionResults(year, round, 'qualifying').subscribe(
      (data: ErgastApiResponse) => {
        this.sessionDetails = data.MRData.RaceTable.Races[0];
      },
      (error) => {
        this.loadindData = false;
      }
    );
  }
}
