import { Component } from '@angular/core';
import { IDCard } from 'src/app/model/idcard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'pokedex';
  public card:IDCard;

  constructor(){
    this.card = new IDCard();
    this.card.age = 34;
    this.card.name = "Legrand";
    this.card.surname = "Nicolas";
    this.card.sex = "H";
  }
}
