import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, Observable, of, Subscriber } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Pokemon, POKEMON_LIST } from '../model/pokemon';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Berry } from '../model/berry';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor( private _http:HttpClient ) { }

  public getPokemons():Observable<Pokemon[]>{
    return this._http.get<Pokemon[]>(environment.api.pokemons).pipe( delay(500) );
  }

  public getRandomNumber():Observable<number>{
    
    const obs:Observable<number> = new Observable(
      (subscriber:Subscriber<number>)=>{

       // on veut diffuser un nombre aléatoire toutes les 100ms 
       const interval = setInterval( 
         ()=>{
           // on tire un nombre au hasard
          const rand:number = Math.random();

          // on diffuse la valeur 
          subscriber.next(rand); 

          // si le nombre tiré est supérieur à 0.9  
          if( rand > 0.9 ){
            // on arrête l'intervalle
            clearInterval(interval);

            // on complète notre flux
            subscriber.complete();
          }
         }, 
         100
       )
        
      }
    );

    return obs;
  }

  public getAll():Observable<{pokemons:Pokemon[], berries:Berry[]}>{
    return combineLatest(
      [
        this.getPokemons(), 
        this.getBerries()
      ]
    ).pipe( 
      map( 
        (data)=>{
          let pokemons = data[0]; 
          let berries = data[1];
          return {
            pokemons:pokemons, 
            berries: berries
          }
        }
      )
    );
    // return forkJoin( 
    //   {
    //     pokemons:this.getPokemons(), 
    //     berries: this.getBerries()
    //   }
    // );
  }

  public getBerries():Observable<Berry[]>{
    return this._http.get<Berry[]>(environment.api.berries);
  }
}
