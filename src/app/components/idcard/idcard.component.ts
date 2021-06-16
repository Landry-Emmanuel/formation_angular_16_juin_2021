import { Component, Input, OnInit } from '@angular/core';
import { IDCard } from 'src/app/model/idcard';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IDCardComponent implements OnInit {

  @Input()
  public card:IDCard|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
