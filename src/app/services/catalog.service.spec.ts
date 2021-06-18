import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TEST_CONFIG_MODULE } from '../config/testing.config.module';
import { Pokemon, POKEMON_LIST } from '../model/pokemon';

import { CatalogService } from './catalog.service';

describe(
  'CatalogService', () => {
  let service: CatalogService;

  beforeEach(
    () => {
      TestBed.configureTestingModule(TEST_CONFIG_MODULE);
      service = TestBed.inject(CatalogService);
    }
  );

  fit(
    'should be created', 
    () => {
      expect(service).toBeTruthy();
    }
  );

  fit( 
    'should get a pokemon by its id', 
    ()=>{
      spyOn(service, "getPokemons").and.returnValue(of(POKEMON_LIST)); 
      service.getById(POKEMON_LIST[0].id).subscribe( 
        (pokemon)=>{
          expect(pokemon).toEqual(POKEMON_LIST[0]);
        }
      )
    }
  ); 

});
