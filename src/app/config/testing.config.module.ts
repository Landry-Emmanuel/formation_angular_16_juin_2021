import { HttpClientModule } from "@angular/common/http";
import { forwardRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { PokedexComponent } from "../components/pokedex/pokedex.component";
import { PokemonComponent } from "../components/pokemon/pokemon.component";
import { BERRIES_LIST } from "../model/berry";
import { POKEMON_LIST } from "../model/pokemon";
import { NameContainsPipe } from "../pipes/name-contains.pipe";
import { CatalogService } from "../services/catalog.service";
import { FakeCatalogService } from "../services/FakeCatalogService";
import { ICatalogServiceDIToken } from "../services/ICatalogService";

export const TEST_CONFIG_MODULE:any = {
    imports: [
        HttpClientModule, 
        FormsModule,
        RouterTestingModule
    ], 
    declarations: [ PokedexComponent, PokemonComponent, NameContainsPipe ], 
    providers: [
        {
            provide: ICatalogServiceDIToken, 
            useClass: CatalogService
        }
    ]
}

export const getTestingConfig = function(profile:"concrete"|"fake"):any{
    const config = {...TEST_CONFIG_MODULE}; 
     
    if( profile === "fake"){
        config.providers = [
            {
                provide: ICatalogServiceDIToken, 
                useClass: FakeCatalogService
            }, 
            {
                provide: ActivatedRoute, 
                useFactory: ()=>{
                    return {
                        data: of( 
                            {
                                resolvedData:{
                                    data: {
                                        pokemons: POKEMON_LIST, 
                                        berries: BERRIES_LIST
                                    }
                                }
                            }
                        )
                    }
                }
            }
        ];
    }

    return config;

}