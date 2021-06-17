import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from 'src/app/model/pokemon';
import { ICatalogService, ICatalogServiceDIToken } from 'src/app/services/ICatalogService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public pokemon:Pokemon|null = null;

  constructor( private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.data.subscribe( 
      (data)=>{
        this.pokemon = data.resolvedData.data;
      }
    )
  }

}
