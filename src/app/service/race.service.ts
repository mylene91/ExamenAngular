import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Race} from '../model/race.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  API_URL = environment.base_url;
  constructor(public http: HttpClient) { }

  getAllRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.API_URL + 'races');
  }

  getOneRace(id: number): Observable<Race> {
    return this.http.get<Race>(this.API_URL + 'race/' + id);
  }
}
