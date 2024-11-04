import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { DiceComponent } from './dice/dice.component';
import { ScoreboardComponent } from './scorecard/scorecard.component';

const routes: Routes = [
  {path: 'game',component:GameComponent},
  {path: 'dice',component:DiceComponent},
  {path: 'score',component:ScoreboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
