import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myNumber:number=4;
myObj={
  fname:"Kapil",
  id:9,
  status:true
}
  constructor(private rout:Router) { }

  ngOnInit() {
  }

  OnPage1()
  {
    this.rout.navigate(['']);
  }

  OnPage2()
  {
    this.rout.navigate(['/Page2',this.myNumber]);
  }

  OnQueryParam()
  {
    this.rout.navigate(['/QueryParameter'],
    {
      queryParams:this.myObj
    }
    );
  }

  

}
