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

  // onUpdate(form: NgForm){
  //   console.log(form.value);
  //   this.commoneventService.updateCommonEvent(form.value,form.value.id)
  //   .subscribe((data)=>{
  //    console.log(data);

  //  });
  //  alert(form.value.userName+' has been updated');
  // }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      // console.log(form.value);
      this.commoneventService.deleteCommonEvent(id).subscribe(response=>{
        console.log(response);
       this.fetchEvents();
    })
    }
  }

//   editHistory(event,id){
//     this.commoneventService.updateCommonEvent(event,id)
//     .subscribe(res=>{
//       console.log(res);
//     })

// }
}

 
  