import { Component, OnInit } from '@angular/core';
import { Pokemon, POKEMON_LIST } from 'src/app/model/pokemon';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  public list:Pokemon[] = [];
  private _service:CatalogService;

  constructor(service:CatalogService) { 
    this._service = service;
  }

  ngOnInit(): void {
    this._service.getAll().subscribe( 

      (pokemons:Pokemon[])=>{
        this.list = pokemons;
      }, 

      (error)=>{
        alert(error);
      }, 

      ()=>{
        console.log("completed");
      }

    );
  }

}
