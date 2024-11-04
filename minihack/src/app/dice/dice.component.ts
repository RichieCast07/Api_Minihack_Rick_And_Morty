// src/app/dice/dice.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dice',
  template: `<div class="dice" [class.selected]="selected">{{ value }}</div>`,
  styles: [`
    .dice { font-size: 24px; cursor: pointer; }
    .selected { border: 2px solid blue; }
  `]
})
export class DiceComponent {
  @Input() value: number = 1;
  @Input() selected: boolean = false;
}
