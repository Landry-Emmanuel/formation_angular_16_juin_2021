import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestingConfig } from 'src/app/config/testing.config.module';
import { POKEMON_LIST } from 'src/app/model/pokemon';

import { PokedexComponent } from './pokedex.component';

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(
    async () => {
      await TestBed.configureTestingModule(getTestingConfig("fake")).compileComponents();
    }
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit( 
    "shuld contain a lot of pokemons", 
    ()=>{
      const element = fixture.nativeElement; 
      const pokTitles =  POKEMON_LIST.map( pok=>pok.name);
      const titles = element.querySelectorAll("*[data-testid='pokemon']");

      expect(titles.length).toEqual(POKEMON_LIST.length);

      for( let i = 0; i < titles.length; i++ ){
        expect(pokTitles).toContain(titles[i].textContent);
      }
    
      
    }
  )
});
