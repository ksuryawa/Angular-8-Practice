import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.css']
})
export class Task03Component implements OnInit {
isClicked:boolean=false;

   
  OnClick()
  {
    this.isClicked=true;
  }

  NoClick()
  {
    this.isClicked=false;
  }


  constructor() { }

  ngOnInit() {
  }

}
