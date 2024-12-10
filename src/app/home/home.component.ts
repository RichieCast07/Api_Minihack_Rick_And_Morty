import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REpisodesService } from '../services/episodes.service';
import { REpisode } from '../interfaces/Repisode.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  episodes: REpisode[] = [];

  constructor(private RepisodesService: REpisodesService, private router: Router) { }

  ngOnInit(): void {
    this.RepisodesService.getEpisode().subscribe((data) => {
      this.episodes = data.results;
    });
  }

  Characters(characterUrls: string[]): void {
    const characterIds = characterUrls.map(url => {
      const urlParts = url.split('/');
      return urlParts[urlParts.length - 1];
    });
  }
}
