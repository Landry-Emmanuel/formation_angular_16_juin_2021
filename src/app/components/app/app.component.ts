import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'pokedex';
  public age:number = 34; 
  public sex:string = "H" ;
  public name:string = "Legrand";
  public surname:string = "Nicolas";  
  public msg:string = "Hello world";
}
