import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IDCardComponent implements OnInit {

  @Input()
  public msg:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
