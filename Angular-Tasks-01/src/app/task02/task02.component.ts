import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task02',
  templateUrl: './task02.component.html',
  styleUrls: ['./task02.component.css']
})
export class Task02Component implements OnInit {

  myNumber:number;
  myResult:number=0;

  CalcSquare()
  {
    this.myResult=this.myNumber*this.myNumber;
   
  }

  CalcCube(number)
  {
    this.myResult=this.myNumber*this.myNumber*this.myNumber;
    
  }

  constructor() { }

  ngOnInit() {
  }

}
