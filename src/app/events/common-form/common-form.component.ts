import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {CommonEventService} from '../event-shared/common-event.service';
import {NgForm} from '@angular/forms'; 
import { CommonEvent } from '../event-shared/commonEvent.model';



@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent implements OnInit {

  _form={
    key:0,
    commonevents:'',
    datefrom:'',
    dateto:'',
    timestart:'',
    timeend:''
  }

  //Select event type
 commonEvents=[
  {
    id:1,
    name:"Holi"
  },
  {
    id:2,
    name:"Diwali"
  },
  {
    id:3,
    name:"Durga Puja"
  },
  {
    id:4,
    name:"Dussehra"
  },
  {
    id:5,
    name:"Christmas"
  },
  {
    id:6,
    name:"New Year"
  },
  {
    id:7,
    name:"Independence Day"
  },
  {
    id:8,
    name:"Republic Day"
  },
  {
    id:9,
    name:"Janmashtmi"
  },
  {
    id:10,
    name:"Eid"
  },
  {
    id:11,
    name:"Baisakhi"
  },
  {
    id:12,
    name:"Lohri"
  },
  {
    id:13,
    name:"Makar Sankaranti"
  }
];

  
  
  events:any;
  constructor(private commonEventService:CommonEventService){
    this.events=[];
  }

//-----------------------------POST DATA TO JSON------------------------------------

// constructor(private http:Http){

  // }

  // eventobj:object={};

  // addCommonEvent= function(event){
  //   this.eventobj={
  //     "commonEvents":event.commonEvents,
  //     "dateFrom":event.dateFrom,
  //     "dateTo":event.dateTo,
  //     "timeStart":event.timeStart,
  //     "timeEnd":event.timeEnd
  //   }
  //   this.http.post("http://localhost:3000/commonevents", this.eventobj).subscribe(
  //         (res:Response)=>{
  //           console.log(res);
  //           // this.isAdded=true;
  //         }
  //       )
  // }

  //-----------------------------------------------------------------------------------

  ngOnInit() {
    this.refetchEvents();
   
  }

  onSubmit(form: NgForm) {
    // if(form.value.key== ''){
    console.log(form.value);
    this.commonEventService.addCommonEvent(form.value)
      .subscribe((data) => {
        console.log(data);
     })
     alert(form.value.userName+' has been added');
     this.resetForm(form);
    // }
    // this.resetForm(form);
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

    this.commonEventService.selectedCommonEvent.emit({
      key:0,
      commonevents:'',
      datefrom:'',
      dateto:'',
      timestart:'',
      timeend:''
    });
  }
//-----------------------------------------------------------------------  
// formSubmitted(form){
//   console.log(form.form.value);
//   this.commonEventService.createCommonEvent(form.form.value)
//   .subscribe((data)=>{
//     console.log(data);
//   })

// }
//------------------------------------------------------------------------

refetchEvents(){
  this.commonEventService.getCommonEvent()
  .subscribe((event)=>{
    this.events=(JSON.parse(event["_body"]));
    console.log(this.events);
  });
}
onDelete(id) {
  if (confirm('Are you sure to delete this record ?') == true) {
    // console.log(form.value);
    this.commonEventService.deleteCommonEvent(id).subscribe(response=>{
      console.log(response);
     this.refetchEvents();
  })
  }
}
onUpdate(form: NgForm){
  console.log(form.value);
  this.commonEventService.updateCommonEvent(form.value,form.value.id)
  .subscribe((data)=>{
   console.log(data);
 });
 alert(form.value.commonevents+' has been updated');
}
onItemClick(event:CommonEvent){
  // this.vendorService.selectedVendor=vendor;
  console.log("Event",event);
  console.log(event);
  this.commonEventService.selectedCommonEvent.emit(event);
}
}


