// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importa los componentes
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { DiceComponent } from './dice/dice.component';
import { ScoreboardComponent } from './scorecard/scorecard.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    DiceComponent, 
    ScoreboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

