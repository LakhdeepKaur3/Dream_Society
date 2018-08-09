import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-booked-events',
  templateUrl: './view-booked-events.component.html',
  styleUrls: ['./view-booked-events.component.css']
})
export class ViewBookedEventsComponent implements OnInit {

  bookingHead=' View BookingDetails';
  eventbooking:any=[
    {
      "name":"Holi",
      "type":"common",
      "vname":"The Rangeela",
      "vlocation":"Block A",
      "dateFrom":"3-4-19",
      "dateTo":"4-4-19",
      "timeFrom":"8:00 AM",
      "timeTo":"2:00 PM",
      "memberType":"Admin",
      "UserID":"D001",
      "Charges":"50000"
  },
  {
    "name":"Diwali",
    "type":"common",
    "vname":"The NOOR",
    "vlocation":"Block B",
    "dateFrom":"3-10-19",
    "dateTo":"4-10-19",
    "timeFrom":"2:00 PM",
    "timeTo":"6:00 PM",
    "memberType":"Admin",
    "UserID":"D001",
    "Charges":"80000"
},
{
  "name":"X-mas",
  "type":"Common",
  "vname":"Kingdom of Jehovah",
  "vlocation":"Block D",
  "dateFrom":"25-12-18",
  "dateTo":"26-12-18",
  "timeFrom":"8:00 PM",
  "timeTo":"12:00 AM",
  "memberType":"Admin",
  "UserID":"D016",
  "Charges":"100000"
},
{
  "name":"Eid",
  "type":"Common",
  "vname":"Red Marble",
  "vlocation":"Block C",
  "dateFrom":"12-5-19",
  "dateTo":"12-5-19",
  "timeFrom":"4:00 pM",
  "timeTo":"10:00 PM",
  "memberType":"Admin",
  "UserID":"D025",
  "Charges":"50000"
},
]

  

  constructor() { }

  ngOnInit() {
  }

}
