import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersModule } from '../characters/characters.module';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CharactersModule
  ],
})
export class HomeModule  {

}
