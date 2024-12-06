import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickMortyService } from '../../services/rick-morty.service';
import { Episode } from '../../interfaces/episode.interface';
import { ModalComponent } from '..//../standalone/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  episodes: Episode[] = [];
  characters = [];
  showModal = false;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.rickMortyService.getEpisodes().subscribe((data) => {
      this.episodes = data.results;
    });
  }

  openModal(characterUrls: string[]): void {
    this.rickMortyService.getCharactersByUrls(characterUrls).subscribe((data) => {
      this.characters = [];
      this.showModal = true;
    });
  }

  closeModal(): void {
    this.showModal = false;
    this.characters = [];
  }
}
