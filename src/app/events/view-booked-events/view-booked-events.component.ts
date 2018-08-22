import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonEventService} from '../event-shared/common-event.service';
import { CommonEvent } from '../event-shared/commonEvent.model';


@Component({
  selector: 'app-view-booked-events',
  templateUrl: './view-booked-events.component.html',
  styleUrls: ['./view-booked-events.component.css']
})
export class ViewBookedEventsComponent implements OnInit {

  bookingHead=' View BookingDetails';
//   eventbooking:any=[
//     {
//       "name":"Holi",
//       "type":"common",
//       "vname":"The Rangeela",
//       "vlocation":"Block A",
//       "dateFrom":"3-4-19",
//       "dateTo":"4-4-19",
//       "timeFrom":"8:00 AM",
//       "timeTo":"2:00 PM",
//       "memberType":"Admin",
//       "UserID":"D001",
//       "Charges":"50000"
//   },
//   {
//     "name":"Diwali",
//     "type":"common",
//     "vname":"The NOOR",
//     "vlocation":"Block B",
//     "dateFrom":"3-10-19",
//     "dateTo":"4-10-19",
//     "timeFrom":"2:00 PM",
//     "timeTo":"6:00 PM",
//     "memberType":"Admin",
//     "UserID":"D001",
//     "Charges":"80000"
// },
// {
//   "name":"X-mas",
//   "type":"Common",
//   "vname":"Kingdom of Jehovah",
//   "vlocation":"Block D",
//   "dateFrom":"25-12-18",
//   "dateTo":"26-12-18",
//   "timeFrom":"8:00 PM",
//   "timeTo":"12:00 AM",
//   "memberType":"Admin",
//   "UserID":"D016",
//   "Charges":"100000"
// },
// {
//   "name":"Eid",
//   "type":"Common",
//   "vname":"Red Marble",
//   "vlocation":"Block C",
//   "dateFrom":"12-5-19",
//   "dateTo":"12-5-19",
//   "timeFrom":"4:00 pM",
//   "timeTo":"10:00 PM",
//   "memberType":"Admin",
//   "UserID":"D025",
//   "Charges":"50000"
// },
// ]

  events:any;

  constructor(private commoneventService:CommonEventService) {
    this.events=[];
   }

  ngOnInit() {
    this.fetchEvents();
  }

  fetchEvents(){
    this.commoneventService.getCommonEvent()
    .subscribe((event)=>{
      this.events=(JSON.parse(event["_body"]));
      console.log(this.events);
    });
  }
  // onItemClick(event:CommonEvent){
  //   // this.vendorService.selectedVendor=vendor;
  //   console.log("Event",event);
  //   console.log(event);
  //   this.commoneventService.selectedCommonEvent.emit(event);
  // }

  onUpdate(form: NgForm){
    console.log(form.value);
    this.commoneventService.updateCommonEvent(form.value,form.value.id)
    .subscribe((data)=>{
     console.log(data);

   });
   alert(form.value.userName+' has been updated');
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      // console.log(form.value);
      this.commoneventService.deleteCommonEvent(id).subscribe(response=>{
        console.log(response);
       this.fetchEvents();
    })
    }
  }

  editHistory(event,id){
    this.commoneventService.updateCommonEvent(event,id)
    .subscribe(res=>{
      console.log(res);
    })

}
}

 
  