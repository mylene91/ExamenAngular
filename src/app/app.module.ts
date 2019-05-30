import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddDinosaurComponent } from './component/add-dinosaur/add-dinosaur.component';
import { DinosaursComponent } from './component/dinosaurs/dinosaurs.component';
import { DinosaurComponent } from './component/dinosaur/dinosaur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddDinosaurComponent,
    DinosaursComponent,
    DinosaurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
