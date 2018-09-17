import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonEventService} from '../event-shared/common-event.service';
import {CommonVenueslistService} from '../event-shared/common-venueslist.service';
import { CommonEvent } from '../event-shared/commonEvent.model';
import {CommonVenuesList} from '../event-shared/common-venueslist.model';


@Component({
  selector: 'app-view-booked-events',
  templateUrl: './view-booked-events.component.html',
  styleUrls: ['./view-booked-events.component.css']
})
export class ViewBookedEventsComponent implements OnInit {

  bookingHead='BookingDetails';


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

  // getVenuesList(){
  //   this.commonvenueslistService.getVenuesList()
  //   .subscribe((event)=>{
  //     this.events=(JSON.parse(event["_body"]));
  //     console.log(this.events);
  //   });
  // }
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

  // onDelete(id) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     // console.log(form.value);
  //     this.commoneventService.deleteCommonEvent(id).subscribe(response=>{
  //       console.log(response);
  //      this.fetchEvents();
  //   })
  //   }
  // }

//   editHistory(event,id){
//     this.commoneventService.updateCommonEvent(event,id)
//     .subscribe(res=>{
//       console.log(res);
//     })

// }
}

 
  