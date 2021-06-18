import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Berry } from 'src/app/model/berry';
import { Pokemon} from 'src/app/model/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {


  public list:Pokemon[] = [];
  public berries:Berry[] = [];

  public nameFilter:string = ""; 
  public typeFilter:string = "";

  constructor( private _route:ActivatedRoute ){}

  ngOnInit(): void { 

    this._route.data.subscribe( 
      (routeData)=>{
        this.berries = routeData.resolvedData.data.berries;
        this.list = routeData.resolvedData.data.pokemons;
      }
    );
    
  }

}
