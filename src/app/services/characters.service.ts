import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RCharacter } from '../interfaces/Rcharacter.interface';

@Injectable({
    providedIn: 'root',
})
export class CharactersService {
    private URL_BASE = 'https://rickandmortyapi.com/api/character';

    constructor(private _http: HttpClient) { }

    getSingleCharacter(id: number): Observable<RCharacter> {
        return this._http.get<RCharacter>(`${this.URL_BASE}/${id}`);
    }
}
