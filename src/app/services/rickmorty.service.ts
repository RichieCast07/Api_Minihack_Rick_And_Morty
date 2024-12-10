import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { Episode } from "../interfaces/episode.interface";
import { Character } from "../interfaces/character.interface";


@Injectable({
    providedIn: 'root',
})
export class RickMortyService {
    private apiUrl = 'https://rickandmortyapi.com/api';

    constructor(private http: HttpClient) { }

    getEpisodes(): Observable<{ results: Episode[] }> {
        return this.http.get<{ results: Episode[] }>(`${this.apiUrl}/episode`);
    }

    getCharactersByUrls(urls: string[]): Observable<Character[]> {
        const requests = urls.map((url) => this.http.get<Character>(url));
        return forkJoin(requests);
    }
}