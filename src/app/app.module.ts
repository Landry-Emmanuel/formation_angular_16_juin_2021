import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { IDCardComponent } from './components/idcard/idcard.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogResolver } from './resolvers/catalog.resolver';
import { LoadingComponent } from './components/loading/loading.component';
import { ICatalogServiceDIToken } from './services/ICatalogService';
import { FakeCatalogService } from './services/FakeCatalogService';
import { FormsModule } from '@angular/forms';
import { NameContainsPipe } from './pipes/name-contains.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IDCardComponent,
    PokedexComponent,
    PokemonComponent,
    HomeComponent,
    LoadingComponent,
    NameContainsPipe
  ],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "pokedex", 
          component: PokedexComponent, 
          resolve: {
            resolvedData: CatalogResolver
          }
        },
        {
          path: "", 
          component: HomeComponent
        }
      ]
    ),
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ICatalogServiceDIToken, 
      useClass: FakeCatalogService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
