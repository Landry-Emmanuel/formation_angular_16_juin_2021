import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { IDCardComponent } from './components/idcard/idcard.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IDCardComponent,
    PokedexComponent,
    PokemonComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "pokedex", 
          component: PokedexComponent
        },
        {
          path: "", 
          component: HomeComponent
        }
      ]
    ),
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
