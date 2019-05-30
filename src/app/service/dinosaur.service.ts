import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dinosaur} from '../model/dinosaur.model';

@Injectable({
  providedIn: 'root'
})
export class DinosaurService {

  API_URL = environment.base_url;

  constructor(public http: HttpClient) { }


  getAllDinosaurs(): Observable<Dinosaur[]> {
    return this.http.get<Dinosaur[]>(this.API_URL + 'dinosaurs');
  }

  getOneDinosaur(id: number): Observable<Dinosaur> {
    return this.http.get<Dinosaur>(this.API_URL + 'dinosaur/' + id);
  }

/* createOneDinosaure({name: string, raceId: number, parkId: number, isWorking: boolean}): Dinosaur {
    const dinosaur: Dinosaur = {name, raceId, parkId, isWorking};
    return this.http.post(dinosaur);
  }

  deleteOne(id: number): Observable<Dinosaur> {
    return this.http.splice<Dinosaur>(this.API_URL + 'dinosaurs/' + id);
  }*/
}
