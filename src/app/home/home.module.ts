import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../services/rickmorty.service';
import { ModalComponent } from '../standalone/modal/modal.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalComponent
  ],
  providers: [
    RickMortyService,
  ]
})
export class HomeModule  {

}
