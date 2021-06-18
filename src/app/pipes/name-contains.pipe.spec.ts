import { Pokemon, POKEMON_LIST } from '../model/pokemon';
import { NameContainsPipe } from './name-contains.pipe';

describe(
  'NameContainsPipe test suite', 
  () => {

    const pipe = new NameContainsPipe();
    const pokemons = POKEMON_LIST;
    let randPokemon:Pokemon = POKEMON_LIST[0];

    beforeEach( 
      ()=>{
        const rand:number = Math.round( Math.random() * (pokemons.length-1) );
        const randPokemon:Pokemon = pokemons[rand];
      }
    )

    it(
      'create an instance', 
      () => {
        expect(pipe).toBeTruthy();
      }
    );

    it( 
      'should filter pokemon by their name', 
      ()=>{
        const result = pipe.transform(pokemons, ""); 
        expect(result).toEqual(POKEMON_LIST);
      }
    ); 


    it( 
      'should filter pokemon by common string', 
      ()=>{
        const start:number = 0; 
        const end:number = Math.round( Math.random() * (randPokemon.name.length-1) );
        const searched:string = randPokemon.name.substring(start, end);
        const result = pipe.transform(pokemons, searched);

        result.forEach( 
          (pokemon:Pokemon)=>{
            expect(pokemon.name.toLowerCase()).toContain(searched.toLowerCase());
          }
        );
      }
    );

  }
);
