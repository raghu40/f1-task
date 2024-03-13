import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErgastApiResponse, Seasons } from './race.model';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  private apiUrl = 'http://ergast.com/api/f1';

  constructor(private http: HttpClient) {}

  getSeasons(): Observable<Seasons> {
    return this.http
      .get<Seasons>(`${this.apiUrl}/seasons.json?limit=75`)
      .pipe(catchError(this.handleError));
  }

  getRaceSchedule(year: number): Observable<ErgastApiResponse> {
    return this.http
      .get<ErgastApiResponse>(`${this.apiUrl}/${year}.json`)
      .pipe(catchError(this.handleError));
  }

  getRaceDetails(year: number, round: number): Observable<ErgastApiResponse> {
    return this.http
      .get<ErgastApiResponse>(`${this.apiUrl}/${year}/${round}/results.json`)
      .pipe(catchError(this.handleError));
  }

  getLapTimes(
    year: number,
    round: number,
    driverId: string
  ): Observable<ErgastApiResponse> {
    return this.http
      .get<ErgastApiResponse>(
        `${this.apiUrl}/${year}/${round}/drivers/${driverId}/laps.json`
      )
      .pipe(catchError(this.handleError));
  }

  getPitStops(year: number, round: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${year}/${round}/pitstops.json`);
  }

  private handleError(error: any): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      errorMessage = 'An error occurred: ' + error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Backend returned code ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
