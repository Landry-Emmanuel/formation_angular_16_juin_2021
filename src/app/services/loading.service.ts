import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, Subject, Subscriber } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loadingStatus:Subject<boolean> = new Subject<boolean>();

  constructor(){}

  public getLoadingStatus():Observable<boolean>{
    return this._loadingStatus;
  }

  public getDataAfter<T>(periodMs:number, obs:Observable<T>):Observable<{data:T}>{

    const period:Observable<boolean> = of(true).pipe( delay(periodMs));
    this._loadingStatus.next(true);

    return forkJoin( 
      {
        period: period, 
        data: obs
      }
    ).pipe( 
      map(
        (value)=>{
          this._loadingStatus.next(false);
          return value;
        }
      )
    );
  }
}
