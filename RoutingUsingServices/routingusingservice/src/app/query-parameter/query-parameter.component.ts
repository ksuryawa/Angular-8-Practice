 import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  constructor(private notifier:NotificationService) { }

  ngOnInit() {
  }

  OnClick(myRef)
  {
    this.notifier.SendNotification(myRef.value);
  }

}
