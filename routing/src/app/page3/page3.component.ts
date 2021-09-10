import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  myNumber:number;
  constructor(private myrout:ActivatedRoute) { }

  ngOnInit() {
    this.myrout.paramMap
    .subscribe(
      (myParam)=>{
        this.myNumber=+myParam.get("myNum")
      }
    )

  }

}
