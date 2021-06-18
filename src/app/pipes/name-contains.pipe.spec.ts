import { POKEMON_LIST } from '../model/pokemon';
import { NameContainsPipe } from './name-contains.pipe';

describe(
  'NameContainsPipe test suite', 
  () => {

    fit(
      'create an instance', 
      () => {
        const pipe = new NameContainsPipe();
        expect(pipe).toBeTruthy();
      }
    );

    fit( 
      'should filter pokemon by their name', 
      ()=>{
        const list = POKEMON_LIST; 
        const pipe = new NameContainsPipe();
        const result = pipe.transform(list, ""); 
        expect(result).toEqual(POKEMON_LIST);
      }
    ); 

  }
);
