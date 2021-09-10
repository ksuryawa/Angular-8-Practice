import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  myName:string;
  myId:number;
  status:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe(
      (query)=>{
        this.myName=query.get("fname");
        this.myId=+query.get("id");
        this.status=query.get("status");
      }
    )
  }

}
