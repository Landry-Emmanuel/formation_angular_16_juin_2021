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

  public percent:number = 0;
  public list:Pokemon[] = [];
  public berries:Berry[] = [];
  private _service:CatalogService;

  constructor(service:CatalogService) { 
    this._service = service;
  }

  ngOnInit(): void { 

    this._service.getProgressBar(10).subscribe( 
      (value:number)=>{
        this.percent = value;
      }
    );

    this._service.getDataAfter(
      1000,
      this._service.getAll()
    ).subscribe( 
      (result)=>{
        this.list = result.data.pokemons; 
        this.berries = result.data.berries;
      }
    );
  }

}
