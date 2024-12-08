import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FootballService {
  private readonly apiKey = 'ae209d6f2887646b8efb7f2c05f39b50';
  private readonly premierLeagueApiUrl = 'https://api.football-data.org/v2/competitions/PPL';
  private readonly championsLeagueApiUrl = 'https://api.football-data.org/v2/competitions/CL';

  constructor(private http: Http) {}

  getPremierLeagueData() {
    let headers = new Headers();
    headers.append('X-Auth-Token', '3a5562a3313d4a829ad49eddbec5c9b2');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.premierLeagueApiUrl, options).map(response => response.json());
  }

  getChampionsLeagueData() {
    let headers = new Headers();
    headers.append('X-Auth-Token', '3a5562a3313d4a829ad49eddbec5c9b2');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.championsLeagueApiUrl, options).map(response => response.json());
  }
}
