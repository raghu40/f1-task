export interface Season {
  season: string;
  url: string;
}
export interface Seasons {
  MRData: {
    total?: string;
    SeasonTable: { Seasons: Season[] };
  };
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface PracticeSession {
  date: string;
  time: string;
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: PracticeSession;
  SecondPractice: PracticeSession;
  ThirdPractice: PracticeSession;
  Qualifying: PracticeSession;
  Sprint?: PracticeSession;
  Results?: RaceResult[];
  Laps?: Lap[];
  PitStops?: pitStop[];
}

export interface pitStop {
  driverId: string;
  lap: string;
  stop: number;
  time: string;
  duration: string;
}

export interface RaceTable {
  season: string;
  round?: string;
  Races: Race[];
  PitStops?: pitStop[];
}

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string | number;
  RaceTable: RaceTable;
}

export interface ErgastApiResponse {
  MRData: MRData;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: {
    time: string;
  };
  AverageSpeed: {
    units: string;
    speed: string;
  };
}

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface Time {
  millis: string;
  time: string;
}

export interface RaceResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}

export interface Timing {
  driverId: string;
  position: string;
  time: string;
}

export interface Lap {
  number: string;
  Timings: Timing[];
}

export interface seriesData {
  name: string;
  value: number;
}

export interface graphData {
  name: string;
  series: seriesData[];
}
