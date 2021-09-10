import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=4;
  myNumber:number=0;
  myNumber2:number=0;
  mySum:number=0;
  myName:string="Kapil Suryawanshi"

  myjsonObj={
    fname:"Kapil",
    id:'4',
    status:true
  }
  constructor(private router:Router) { 
    
  }

  ngOnInit() {
  }

  OnClick()
  {
    this.mySum=(this.myNumber)+(this.myNumber2);
    console.log("Sum is :: "+this.mySum);
  }

  OnPage1()
  {
    this.router.navigate(['/Page1',this.mySum]);
  }

  OnPage2()
  {
    this.router.navigate(['/Page2',this.myid,this.myName]);
  }

  OnPage3()
  {

  }

  OnFollower()
  {

  }

  OnQueryParam()
  {
    this.router.navigate(['/QueryParameter'],
    {queryParams:this.myjsonObj}
    );
  }

}
