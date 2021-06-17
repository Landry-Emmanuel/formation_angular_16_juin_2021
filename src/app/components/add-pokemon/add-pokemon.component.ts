import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  public pokeform!:FormGroup;

  constructor(private _builder:FormBuilder) { 
    this.pokeform = this._builder.group(new Pokemon())
  }

  ngOnInit(): void {
  }

}
