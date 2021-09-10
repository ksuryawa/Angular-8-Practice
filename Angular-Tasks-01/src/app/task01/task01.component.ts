import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task01',
  templateUrl: './task01.component.html',
  styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {
flag:boolean=true
onClick(myTag)
{
  if(this.flag)
  {
    myTag.style.color='red';
    myTag.style.background='aqua';
  this.flag=false;
  }
  else
  {
    myTag.style.color='aqua';
    myTag.style.background='red';
    this.flag=true;
  }

}  

  constructor() { }

  ngOnInit() {
  }

}
