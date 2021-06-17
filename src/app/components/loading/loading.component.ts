import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public display:boolean = false;
  public percent:number = 0;
  constructor( private _service:LoadingService) { }

  ngOnInit(): void {

    this._service.getProgressStatus().subscribe( 
      (value:number)=>{
        this.percent = value;
      }
    )

    this._service.getLoadingStatus().subscribe( 
      (value:boolean)=>{
        this.display = value;
      }
    )
  }

}
