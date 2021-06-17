import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject, timer, zip } from 'rxjs';
import { interval, merge, of } from 'rxjs';
import { delay, filter, last, map, mergeAll, skipUntil, take, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


      const data = of("je suis de la donnée").pipe( delay(3000));
      const int = interval(10).pipe( takeUntil(data) ); 
      const all = merge(data,int); 
      all.subscribe( 
        (value:number|string)=>{
          if( typeof value === "string"){
            console.log(value );
          }
          else{
            console.log(value % 100);
          }
        }
      )


      /*
      const data = of("data available").pipe(delay(3000)); 
      const time = timer(0,10).pipe(take(100));
      const subject:Subject<number|string> = new Subject<number|string>();
      let _cached:string = "";

      merge( 
        time, 
        data
      ).subscribe( 
        (value)=>{
          if( typeof value === "string"){
            _cached = value as string;
          }
          else{
            subject.next(value);
          }
        }, 
        console.log, 
        ()=>{
          subject.next(_cached); 
          subject.complete();
        }
      ); 

      subject.subscribe(
        (value:number|string)=>{
          console.log(value);
        }
      )*/




      
  }

}
