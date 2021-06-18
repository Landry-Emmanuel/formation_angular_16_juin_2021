import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getTestingConfig, TEST_CONFIG_MODULE } from '../config/testing.config.module';
import { Pokemon, POKEMON_LIST } from '../model/pokemon';
import { CatalogService } from './catalog.service';
import { FakeCatalogService } from './FakeCatalogService';
import { ICatalogService, ICatalogServiceDIToken } from './ICatalogService';

describe(
  'ICatalogService test suite', () => {
  let service: ICatalogService;

  beforeEach(
    () => {
     
      TestBed.configureTestingModule(getTestingConfig("concrete"));
      service = TestBed.inject(ICatalogServiceDIToken);
      console.log(service);
    }
  );

  it(
    'should be created', 
    () => {
      expect(service).toBeTruthy();
    }
  );

  it( 
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
