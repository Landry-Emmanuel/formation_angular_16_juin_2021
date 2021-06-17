import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, interval, Observable, of, Subscriber } from 'rxjs';
import { Pokemon, POKEMON_LIST } from '../model/pokemon';
import { BERRIES_LIST, Berry } from '../model/berry';
import { ICatalogService } from './ICatalogService';

@Injectable({
  providedIn: 'root'
})
export class FakeCatalogService implements ICatalogService {

  constructor() { }

  public getPokemons():Observable<Pokemon[]>{
    return of(POKEMON_LIST);
  }

  public getAll():Observable<{pokemons:Pokemon[], berries:Berry[]}>{
    
    return forkJoin( 
      {
        pokemons:this.getPokemons(), 
        berries: this.getBerries()
      }
    );
  }
  
  public getBerries():Observable<Berry[]>{
    return of(BERRIES_LIST);
  }
}
