import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dinosaur} from '../model/dinosaur.model';
import {Park} from '../model/park.model';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  API_URL = environment.base_url;

  constructor(public http: HttpClient) { }


  getAllParks(): Observable<Park[]> {
    return this.http.get<Park[]>(this.API_URL + 'parks');
  }

  getOnePark(id: number): Observable<Park> {
    return this.http.get<Park>(this.API_URL + 'park/' + id);
  }

}
