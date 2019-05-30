import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DinosaursComponent} from './component/dinosaurs/dinosaurs.component';
import {AddDinosaurComponent} from './component/add-dinosaur/add-dinosaur.component';
import {DinosaurComponent} from './component/dinosaur/dinosaur.component';

const routes: Routes = [
  {path: '', component: DinosaursComponent},
  {path: 'dinosaurs', component: DinosaursComponent},
  {path: 'add-dinosaur', component: AddDinosaurComponent},
  {path: 'dinosaur', component: DinosaurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
