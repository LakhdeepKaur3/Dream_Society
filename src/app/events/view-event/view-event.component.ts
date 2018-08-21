import { Component, OnInit } from '@angular/core';
import {CommonEventService} from '../event-shared/common-event.service';


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css'],
  providers:[CommonEventService]
})
export class ViewEventComponent implements OnInit {

  constructor(private commoneventService:CommonEventService) { }

  ngOnInit() {
  }

}
