import { Component } from '@angular/core';

@Component({
  selector: 'game-root',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  diceValues = Array(5).fill(1);  // Inicializa 5 dados con el valor de 1
  selectedDice = Array(5).fill(false);  // Controla qué dados están bloqueados
  rollsLeft = 3;  // Contador de lanzamientos restantes
  scores = {};  // Puntajes para cada jugada posible
  
  // Función para lanzar los dados
  rollDice() {
    if (this.rollsLeft > 0) {
      this.diceValues = this.diceValues.map((value, i) =>
        this.selectedDice[i] ? value : this.generateRandomDiceValue()
      );
      this.rollsLeft--;  // Reduce el contador de lanzamientos
    }
  }

  // Genera un valor aleatorio para cada dado
  generateRandomDiceValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Bloquea o desbloquea un dado
  toggleDiceSelection(index: number) {
    if (this.rollsLeft > 0) {  // Solo permite bloquear si hay lanzamientos restantes
      this.selectedDice[index] = !this.selectedDice[index];
    }
  }

  // Reinicia el juego
  resetGame() {
    this.diceValues = Array(5).fill(1);
    this.selectedDice = Array(5).fill(false);
    this.rollsLeft = 3;
    this.scores = {};  // Resetea los puntajes
  }

  // Registra el puntaje de la jugada seleccionada
  recordScore(scoreEvent: any) {
    const { category, score } = scoreEvent;
    this.scores[category] = score;
    this.resetGame();  // Reinicia el juego después de registrar la jugada
  }
}
