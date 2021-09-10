import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.css']
})
export class TemplateDrivenFormDemoComponent implements OnInit {

  contactMethod:any[]=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Office Phone'}
  ];

  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  constructor() { }

  ngOnInit() {
  }

}
