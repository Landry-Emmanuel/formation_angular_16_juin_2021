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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameContainsPipe } from './pipes/name-contains.pipe';
import { CatalogService } from './services/catalog.service';
import { DetailComponent } from './components/detail/detail.component';
import { DetailResolver } from './resolvers/detail.resolver';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducer';
import { bookReducer } from './ngrx/reducers/books.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ContactModule } from './contact-module/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    IDCardComponent,
    PokedexComponent,
    PokemonComponent,
    HomeComponent,
    LoadingComponent,
    NameContainsPipe,
    DetailComponent,
    AddPokemonComponent
  ],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "create", 
          component: AddPokemonComponent
        },
        {
          path: "detail/:id", 
          component: DetailComponent, 
          resolve: {
            resolvedData: DetailResolver
          }
        },
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
      ], 
      {
        useHash: true
      }
    ),
    ContactModule,
    ReactiveFormsModule,
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        counter: counterReducer, 
        books: bookReducer
      }
    ),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: ICatalogServiceDIToken, 
      useClass: CatalogService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
