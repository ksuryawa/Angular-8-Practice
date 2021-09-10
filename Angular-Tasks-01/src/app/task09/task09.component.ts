import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task09',
  templateUrl: './task09.component.html',
  styleUrls: ['./task09.component.css']
})
export class Task09Component implements OnInit {

  mySize 



  constructor() { }

  ngOnInit() {
  }
  w:any;

  OnChange(name)
  {

//     this.w=name.style.width;
//     console.log("Current width :: "+ this.w);
//     console.log("Change event");

// name.style.width=name.style.width + (name.value);
// console.log("Afyer width :: "+ name.style.width);
name.style.width=name.value + "%";
  }

  
}
