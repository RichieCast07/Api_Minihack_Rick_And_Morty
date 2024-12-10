import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rickmorty } from '../interfaces/rickmorty.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RickMortyService {
    private URL_BASE = 'https://rickandmortyapi.com/api/location';

    constructor(private _http: HttpClient) { }

    getSingleLocation(id: number): Observable<rickmorty> {
        return this._http.get<rickmorty>(`${this.URL_BASE}/${id}`);
    }
}
