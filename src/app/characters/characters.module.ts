import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ModalComponent } from './modal/modal.component';
import { ListCardsComponent } from './list-cards/list-cards.component';



@NgModule({
  declarations: [
    CardsComponent,
    ListCardsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardsComponent,
    ListCardsComponent
  ]
})
export class CharactersModule { }
