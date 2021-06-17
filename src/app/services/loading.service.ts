import { Injectable } from '@angular/core';
import { forkJoin, interval, merge, Observable, of, Subject, Subscriber } from 'rxjs';
import { delay, filter, map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loadingStatus:Subject<boolean> = new Subject<boolean>();
  private _progressStatus:Subject<number> = new Subject<number>();

  constructor(){}

  public getProgressStatus():Observable<number>{
    return this._progressStatus;
  }

  public getLoadingStatus():Observable<boolean>{
    return this._loadingStatus;
  }

  public getProgressingDataAfter<T>(periodMs:number, obs:Observable<T>):Observable<{data:T}>{
    const data = this.getDataAfter(periodMs, obs);
    const animMs:number = periodMs / 100;
    const int = interval(animMs).pipe( takeUntil(data) ); 
    const all = merge(data,int);
    
    return all.pipe( 
      filter( 
        (value)=>{
          if( typeof value === "number")
            this._progressStatus.next(value%100); 

          return typeof value !== "number";
        }
      )
    ).pipe( 
      map(
        (value)=>{
          return value as {data:T};
        }
      )
    )
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
