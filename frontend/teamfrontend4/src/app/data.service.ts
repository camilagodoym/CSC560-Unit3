import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Team } from './team.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = 'http://localhost:8080/api/team';
  
constructor(private _http: HttpClient) { }

getTeam() : Observable<Team[]>{
return this._http.get<Team[]>(`${this.apiUrl}`);
}
}
