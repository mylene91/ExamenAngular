import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dinosaur} from '../../model/dinosaur.model';
import {DinosaurService} from '../../service/dinosaur.service';

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur.component.html',
  styleUrls: ['./dinosaur.component.css']
})
export class DinosaurComponent implements OnInit {

  @Input() dinosaur: Dinosaur;
  @Output() dinosaurEmitter: EventEmitter<Dinosaur> = new EventEmitter<Dinosaur>();

  constructor() { }

  ngOnInit() {

  }


  emitDinosaur(): void {
    this.dinosaurEmitter.emit(this.dinosaur);
  }

}
