import { Inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../model/pokemon';
import { ICatalogService, ICatalogServiceDIToken } from '../services/ICatalogService';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogResolver implements Resolve<any> {

  constructor( 
    @Inject(ICatalogServiceDIToken)
    private _catalog:ICatalogService, 
    private _loading:LoadingService
  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._loading.getProgressingDataAfter(
      1000, 
      this._catalog.getAll()
    );
  }
}
