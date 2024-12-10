import { Component, Input, OnInit } from '@angular/core';
import { RCharacter } from '../../interfaces/Rcharacter.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() id: number = 0;

  character: RCharacter | null = null;

  constructor(private RCharacters: CharactersService) { }

  ngOnInit(): void {
    if (this.id) {
      this.RCharacters.getSingleCharacter(this.id).subscribe({
        next: (response) => {
          this.character = response;
        },
        error: (err) => {
          console.error('Error fetching character:', err);
        },
      });
    } else {
      console.error('ID no proporcionado para el componente Cards');
    }
  }

  isModalOpen = false;
  originId: number | null = null;

  viewLocation(originURL: string): void {
    const id = this.getIdFromUrl(originURL);
    if (id !== null) {
      this.originId = id;
      this.isModalOpen = true;
    }
  }

  onModalConfirm(): void {
    this.isModalOpen = false;
  }

  onModalCancel(): void {
    this.isModalOpen = false;
  }

  private getIdFromUrl(url: string): number | null {
    const match = url.match(/\/(\d+)$/);
    return match ? parseInt(match[1], 10) : null;
  }
}
