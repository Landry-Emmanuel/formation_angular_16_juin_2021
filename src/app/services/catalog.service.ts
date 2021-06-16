import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, interval, Observable, of, Subscriber } from 'rxjs';
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

  public getProgressBar(periodMs:number):Observable<number>{
    const obs:Observable<number> = new Observable<number>(
      (sub:Subscriber<number>)=>{
        let percent:number = 0; 

        const interval = setInterval( 
          ()=>{
            percent++;
            sub.next(percent); 
            if( percent >= 100 ){
              clearInterval(interval); 
              sub.complete();
            }
          }, 
          periodMs
        )
      }
    )

    return obs;
  }

  public getDataAfter<T>(periodMs:number, obs:Observable<T>):Observable<{data:T}>{

    const period:Observable<boolean> = of(true).pipe( delay(periodMs));

    return forkJoin( 
      {
        period: period, 
        data: obs
      }
    );
  }

  public getBerries():Observable<Berry[]>{
    return this._http.get<Berry[]>(environment.api.berries);
  }
}
