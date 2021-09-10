import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task07',
  templateUrl: './task07.component.html',
  styleUrls: ['./task07.component.css']
})
export class Task07Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myUserName:string;
  myPassword:string;
  username:string="admin";
  password:string="password123"

  OnClick()
  {
    if(this.myUserName==this.username && this.myPassword==this.password)
    {
      alert("Validated Successfully!!!!")
    }
    else
    {
      alert("Invalid username or password...")
    }
  }

}
