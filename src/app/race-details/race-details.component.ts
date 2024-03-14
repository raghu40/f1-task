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
    const yearParam = this.route.snapshot.paramMap.get('year');
    const roundParam = this.route.snapshot.paramMap.get('round');
    this.loadindData = true;
    if (yearParam && roundParam) {
      this.year = +yearParam;
      this.round = +roundParam;
    }
  }
}
