import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input()
  public compact:boolean = true;

  @Input()
  public pokemon:Pokemon|null = null;
 
  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
