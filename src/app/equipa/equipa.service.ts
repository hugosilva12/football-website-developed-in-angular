import { Injectable } from '@angular/core';
import{Http,Headers,RequestOptions} from  '@angular/http';
import'rxjs/add/operator/map';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable()
export class EquipaService {

 
  constructor(private http: Http) { }
  apiKey = "ae209d6f2887646b8efb7f2c05f39b50";
  private apiUrl='https://api.football-data.org/v2/teams/2';

  getFootball(id){
    this.apiUrl= 'https://api.football-data.org/v2/teams/' + id ;
    let headers= new Headers();
    headers.append('X-Auth-Token','3a5562a3313d4a829ad49eddbec5c9b2');
    let options = new RequestOptions({headers:headers});
    return this.http.get(this.apiUrl ,options).map(response => response.json());
  
    }
}