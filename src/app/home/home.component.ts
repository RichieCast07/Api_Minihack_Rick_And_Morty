import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../services/rickmorty.service';
import { Episode } from '../interfaces/episode.interface';
import { Character } from '../interfaces/character.interface';
import { ModalComponent } from "../standalone/modal/modal.component";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  episodes: Episode[] = [];
  characters = [];
  showModal = false;

  constructor(private rickMortyService: RickMortyService) { }

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
