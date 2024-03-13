import { Component } from '@angular/core';
import { RaceService } from '../shared/race.service';
import { ErgastApiResponse, Race, Season, Seasons } from '../shared/race.model';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss'],
})
export class RaceListComponent {
  races!: Race[];
  selectedYear!: string;
  years: number[] = [];
  seasons: Season[] = [];
  selectedSeason!: string;
  errorMessage: string = '';
  isDataLoading: boolean = false;

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.getSeasons();
  }

  getSeasons(): void {
    this.raceService.getSeasons().subscribe({
      next: (seasons: Seasons) => {
        this.seasons = seasons.MRData.SeasonTable.Seasons;
        this.selectedSeason = this.seasons[this.seasons.length - 2]['season'];
        this.getRaceSchedule(Number(this.selectedSeason));
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  getRaceSchedule(year: number): void {
    this.isDataLoading = true;
    this.raceService
      .getRaceSchedule(year)
      .subscribe((data: ErgastApiResponse) => {
        this.races = data.MRData.RaceTable.Races;
        this.isDataLoading = false;
      });
  }

  onSelectYear(year: string): void {
    this.selectedYear = year;
    this.getRaceSchedule(Number(year));
  }
}
