import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, interval, Observable, of, Subscriber } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Pokemon, POKEMON_LIST } from '../model/pokemon';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Berry } from '../model/berry';
import { ICatalogService } from './ICatalogService';

@Injectable({
  providedIn: 'root'
})
export class CatalogService implements ICatalogService {

  constructor( private _http:HttpClient ) { }

  public getPokemons():Observable<Pokemon[]>{
    return this._http.get<Pokemon[]>(environment.api.pokemons);
  }

  public getAll():Observable<{pokemons:Pokemon[], berries:Berry[]}>{
    /*
    return combineLatest(
      [
        this.getPokemons(), 
        this.getBerries(), 
        this.getProgressBar(20)
      ]
    ).pipe( 
      map( 
        (data)=>{
          let pokemons = data[0]; 
          let berries = data[1];
          let progress = data[2];
          return {
            pokemons:pokemons, 
            berries: berries, 
            progress: progress
          }
        }
      )
    );
    */
    return forkJoin( 
      {
        pokemons:this.getPokemons(), 
        berries: this.getBerries()
      }
    );
  }
  
  public getBerries():Observable<Berry[]>{
    return this._http.get<Berry[]>(environment.api.berries);
  }
}
