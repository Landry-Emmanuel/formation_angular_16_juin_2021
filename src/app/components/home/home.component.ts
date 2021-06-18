import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public count:number = 0;
  public books:string[] = [];

  constructor( private cd:ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh():void{
    this.count++;
    if( this.count % 5 === 0 )
      this.cd.markForCheck();
  }

}
