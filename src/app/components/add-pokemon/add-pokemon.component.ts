import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/model/pokemon';
import { DescValidator } from 'src/app/validators/DescValidator';
import { HaddockValidator } from 'src/app/validators/HaddockValidator';
import { NameValidator } from 'src/app/validators/NameValidator';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {

  public pokeform:FormGroup;

  constructor(
    private _builder:FormBuilder, 
    private _haddockValidator:HaddockValidator
  ) { 
    this.pokeform = this._builder.group(
      {
        name: [
          "a", 
          {
            asyncValidators:[], 
            validators:[Validators.required, new NameValidator()]
          }
        ],
        type: [
          "a", 
          {
            asyncValidators:[], 
            validators:[Validators.required]
          }
        ],
        desc: [
          "a", 
          {
            asyncValidators:[this._haddockValidator], 
            validators:[Validators.required, new DescValidator()]
          }
        ],
        imgUrl: [
          "a", 
          {
            asyncValidators:[], 
            validators:[Validators.required]
          }
        ],
      }
    );
  }

  public onSubmit():void{
    console.log(this.pokeform);
  }

  ngOnInit(): void {
  }

}
