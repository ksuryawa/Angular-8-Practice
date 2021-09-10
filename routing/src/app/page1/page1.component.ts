import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  mysum:number;
  constructor(private sumRoute:ActivatedRoute) { }

  ngOnInit() {
this.sumRoute.paramMap
.subscribe(
  (param)=>{
    this.mysum=+param.get("sum")
    
  }
)

  }

}
