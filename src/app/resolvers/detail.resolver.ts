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
export class DetailResolver implements Resolve<{data:Pokemon|null}> {

  constructor( 
    @Inject(ICatalogServiceDIToken)
    private _service:ICatalogService, 

    private _loading:LoadingService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{data:Pokemon|null}> {
    const strId:string|null = route.paramMap.get("id");
    const id:number = strId === null ? -1 : parseInt(strId); 
    return this._loading.getDataAfter( 1000, this._service.getById(id) );
  }
}
