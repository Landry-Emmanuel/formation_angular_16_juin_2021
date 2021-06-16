import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon, POKEMON_LIST } from '../model/pokemon';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor( private _http:HttpClient ) { }

  public getAll():Observable<Pokemon[]>{
    return this._http.get<Pokemon[]>(environment.api.pokemons);
  }
}
