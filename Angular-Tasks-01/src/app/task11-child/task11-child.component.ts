import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task11-child',
  templateUrl: './task11-child.component.html',
  styleUrls: ['./task11-child.component.css']
})
export class Task11ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() Task11ParentData;
}
