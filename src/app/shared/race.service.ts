import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErgastApiResponse, Seasons } from './race.model';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  private apiUrl = 'http://ergast.com/api/f1';

  constructor(private http: HttpClient) {}

  // Fetches a list of F1 seasons
  getSeasons(): Observable<Seasons> {
    return this.http
      .get<Seasons>(`${this.apiUrl}/seasons.json?limit=75`)
      .pipe(catchError(this.handleError));
  }

  // Fetches the race schedule for a given year
  getRaceSchedule(year: number): Observable<ErgastApiResponse> {
    return this.http
      .get<ErgastApiResponse>(`${this.apiUrl}/${year}.json`)
      .pipe(catchError(this.handleError));
  }

  // Fetches the race details for a specific year and round
  getRaceDetails(year: number, round: number): Observable<ErgastApiResponse> {
    return this.http
      .get<ErgastApiResponse>(`${this.apiUrl}/${year}/${round}/results.json`)
      .pipe(catchError(this.handleError));
  }

  // Fetches lap times for a specific year and round
  getLapTimes(year: number, round: number): Observable<ErgastApiResponse> {
    return this.http
      .get<ErgastApiResponse>(`${this.apiUrl}/${year}/${round}/laps.json`)
      .pipe(catchError(this.handleError));
  }

  // Fetches pit stop data for a specific year and round
  getPitStops(year: number, round: number): Observable<ErgastApiResponse> {
    return this.http.get<ErgastApiResponse>(
      `${this.apiUrl}/${year}/${round}/pitstops.json`
    );
  }

  // Fetches session results (qualifying, practice, etc.) for a specific year, round, and session
  getSessionResults(
    year: number,
    round: number,
    session: string
  ): Observable<ErgastApiResponse> {
    return this.http.get<ErgastApiResponse>(
      `${this.apiUrl}/${year}/${round}/${session}.json`
    );
  }

  // Handles HTTP errors
  private handleError(error: HttpErrorResponse): Observable<any> {
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

  // Converts a duration string to milliseconds
  timeStringToMilliseconds(duration: string): number {
    // Check if the duration contains a colon
    if (duration.includes(':')) {
      // Split the duration into parts
      const parts = duration.split(':');

      // Extract minutes, seconds, and milliseconds
      const minutes = parseInt(parts[0]);
      const secondsAndMillis = parts[1].split('.');
      const seconds = parseInt(secondsAndMillis[0]);
      const milliseconds = parseInt(secondsAndMillis[1]);

      // Convert each part to milliseconds and sum them up
      return minutes * 60 * 1000 + seconds * 1000 + milliseconds;
    } else {
      // Assume the duration contains only seconds and milliseconds
      const secondsAndMillis = duration.split('.');
      const seconds = parseInt(secondsAndMillis[0]);
      const milliseconds = parseInt(secondsAndMillis[1]);

      // Convert seconds and milliseconds to milliseconds and return
      return seconds * 1000 + milliseconds;
    }
  }
}
