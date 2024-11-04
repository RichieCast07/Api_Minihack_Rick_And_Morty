
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  template: `
    <div *ngFor="let category of categories">
      <button (click)="selectScore(category)" [disabled]="scores[category] !== null">
        {{ category }}: {{ scores[category] || '-' }}
      </button>
    </div>
  `
})
export class ScoreboardComponent {
  @Input() scores!: { [key: string]: number | null };
  @Output() scoreSelected = new EventEmitter<string>();

  categories = ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes', 'threeOfAKind', 
                'fourOfAKind', 'fullHouse', 'smallStraight', 'largeStraight', 
                'yahtzee', 'chance'];

  selectScore(category: string) {
    this.scoreSelected.emit(category);
  }
}

