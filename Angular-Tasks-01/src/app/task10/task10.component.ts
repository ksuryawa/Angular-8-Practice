import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css']
})
export class Task10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnMouseOver(ref)
  {
    ref.style.opacity=0.2;
  }
  OnMouseOut(ref)
  {
    ref.style.opacity=1;
  }

}
