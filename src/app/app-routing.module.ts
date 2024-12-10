import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCardsComponent } from './characters/list-cards/list-cards.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'characters', component: ListCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
