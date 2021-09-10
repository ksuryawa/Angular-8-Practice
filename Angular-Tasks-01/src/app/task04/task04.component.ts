import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task04',
  templateUrl: './task04.component.html',
  styleUrls: ['./task04.component.css']
})
export class Task04Component implements OnInit {
  imgurl:string="../../assets/AngularArchitecture.jpeg";

  onClick(ref)
  {
    ref.src=this.imgurl;
  
  }

  ResetImage(ref)
  {
    ref.src='';
  }
  constructor() { }

  ngOnInit() {
  }

}
