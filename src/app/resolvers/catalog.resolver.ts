import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../model/pokemon';
import { CatalogService } from '../services/catalog.service';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogResolver implements Resolve<any> {

  constructor( 
    private _catalog:CatalogService, 
    private _loading:LoadingService
  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._loading.getDataAfter(
      1000, 
      this._catalog.getAll()
    );
  }
}
