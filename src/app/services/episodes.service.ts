import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REpisode } from '../interfaces/Repisode.interface';


@Injectable({
    providedIn: 'root'
})
export class REpisodesService {

    constructor(private http: HttpClient) { }

    private apiUrl = 'https://rickandmortyapi.com/api/episode';

    getEpisode(): Observable<{ results: REpisode[] }> {
        return this.http.get<{ results: REpisode[] }>(this.apiUrl);
    }

}

