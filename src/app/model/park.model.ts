import {City} from './city.model';
import {Dinosaur} from './dinosaur.model';

export interface Park {
  id: number;
  name: string;
  city: City;
  dinosaurs: Dinosaur[];

}
