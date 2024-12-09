import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-morty.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  episodes: any[] = []; // Inicializa como un array vacío

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getEpisodes().subscribe({
      next: (data) => {
        this.episodes = data.results; // Asegúrate de que `results` es el array esperado
      },
      error: (err) => {
        console.error('Error fetching episodes:', err);
      }
    });
  }
}
