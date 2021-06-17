import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, Subject, timer, zip } from 'rxjs';
import { interval, merge, of } from 'rxjs';
import { delay, filter, last, map, mapTo, mergeAll, skipUntil, take, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



    // const data1 = interval(1000).pipe( mapTo("COUCOU") );
    // const data2 = interval(5000).pipe( mapTo("HELLO WORLD")); 

    // merge(data1, data2).pipe(take(10)).subscribe( 
    //   (value:string)=>{
    //     console.log(value);
    //   }
    // )
      
  }

}
