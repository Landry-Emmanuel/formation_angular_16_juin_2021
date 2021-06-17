import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICatalogService, ICatalogServiceDIToken } from 'src/app/services/ICatalogService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor( 
    private _route:ActivatedRoute, 
    
    @Inject(ICatalogServiceDIToken)
    private _service:ICatalogService
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe( 
      (map:ParamMap)=>{
        const id:number = ( map.get("id") === null ) ? -1 : parseInt( map.get("id") as string );
        // this._service.getById
      }
    )
  }

}
