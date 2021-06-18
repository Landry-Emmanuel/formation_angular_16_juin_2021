import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin, Observable, Subject, timer, zip } from 'rxjs';
import { interval, merge, of } from 'rxjs';
import { delay, filter, last, map, mapTo, mergeAll, skipUntil, take, takeLast, takeUntil } from 'rxjs/operators';
import { addBook } from 'src/app/ngrx/actions/books.action';
import { decrement, increment, reset } from 'src/app/ngrx/actions/counter.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public count:number = 0;
  public books:string[] = [];

  constructor( private _store:Store<{counter:number, books:string[]}>) { }

  ngOnInit(): void {

    this._store.select("books").subscribe( 
      (books:string[])=>{
        this.books = books;
      }
    );

    this._store.select("counter").subscribe( 
      (counter:number)=>{
        this.count = counter;
      }
    );
  }

  public onAddBook():void{
    this._store.dispatch( addBook({bookTitle: "sans famille"}));
  }

  public onIncrement():void{
    this._store.dispatch( increment() );
  }
  
  public onDecrement():void{
    this._store.dispatch( decrement() );
  }

  public onReset():void{
    this._store.dispatch( reset() );
  }

}
