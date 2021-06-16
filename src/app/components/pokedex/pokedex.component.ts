import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Berry } from 'src/app/model/berry';
import { Pokemon, POKEMON_LIST } from 'src/app/model/pokemon';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public list:Pokemon[] = [];
  public berries:Berry[] = [];
  private _service:CatalogService;

  constructor(service:CatalogService) { 
    this._service = service;
  }

  ngOnInit(): void {

    const sub:Subscription = this._service.getRandomNumber().subscribe( 
      (value:number)=>{
        console.log(value);
      }, 
      (error)=>{
        console.log(error);
      }, 
      ()=>{
        sub.unsubscribe();
        console.log("***********************");
      }
    ); 



    this._service.getAll().subscribe( 

      (data: {pokemons:Pokemon[], berries:Berry[]})=>{
        this.list = data.pokemons; 
        this.berries = data.berries;
        console.log(data);
      }

    );
  }

}
