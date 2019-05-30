import { Component, OnInit } from '@angular/core';
import {Dinosaur} from '../../model/dinosaur.model';
import {DinosaurService} from '../../service/dinosaur.service';

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
/*  template: `
  <ul *ngFor="let dinosaur of dinosaurs"
      [ngSwitch]="dinosaur.race">
    <li *ngSwitchCase="'Stegosaurus'"
        src="./assets/Dino/stegosaurus.png">
    </li>
    <li *ngSwitchCase="'Mesosaurus'"
        src="./assets/Dino/mesosaurus.png">
    </li>
    <li *ngSwitchCase="'Tyrannosaurus'"
        src="./assets/Dino/tyrannosaurus.png">
    </li>
    <li *ngSwitchCase="'Pterodactylus'"
        src="./assets/Dino/pterodactylus.png">
    </li>
    <li *ngSwitchDefault src="/assets/Dino/stegosaurus.png">
    </li>
  </ul>`,*/
  styleUrls: ['./dinosaurs.component.css']
})
export class DinosaursComponent implements OnInit {

  dinosaurs: Dinosaur[];
  constructor(public ds: DinosaurService) { }

  ngOnInit() {
    this.ds.getAllDinosaurs().subscribe(res => {
      this.dinosaurs = res;
    });
  }

}
