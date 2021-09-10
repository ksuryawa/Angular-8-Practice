import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task08',
  templateUrl: './task08.component.html',
  styleUrls: ['./task08.component.css']
})
export class Task08Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isEven:boolean=true;

  OnClick(num)
  {
    if(num%2==0)
    {
this.isEven=true;
    }
    else
    {
      this.isEven=false;
    }
  }

}
