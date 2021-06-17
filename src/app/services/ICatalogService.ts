import { Observable } from "rxjs";
import { Berry } from "../model/berry";
import { Pokemon } from "../model/pokemon";

export interface ICatalogService{
    getPokemons():Observable<Pokemon[]>;
    getAll():Observable<{pokemons:Pokemon[], berries:Berry[]}>;
    getBerries():Observable<Berry[]>;
}

export const ICatalogServiceDIToken:string = "ICatalogServiceDIToken";