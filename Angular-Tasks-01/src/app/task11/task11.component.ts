import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task11',
  templateUrl: './task11.component.html',
  styleUrls: ['./task11.component.css']
})
export class Task11Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
rating:number;
OnClick(rat)
{
this.rating=rat;
}
}
