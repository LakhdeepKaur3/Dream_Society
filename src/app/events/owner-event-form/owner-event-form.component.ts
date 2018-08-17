import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
import  {NgForm} from '@angular/forms';
import {PersonalEventService} from '../event-shared/personal-event.service'
 

@Component({
  selector: 'app-owner-event-form',
  templateUrl: './owner-event-form.component.html',
  styleUrls: ['./owner-event-form.component.css']
})
export class OwnerEventFormComponent implements OnInit {
  
  _form={
    key:0,
    name:'',
    personalevents:'',
    datefrom:'',
    dateto:'',
    timestart:'',
    timeend:''
  }

      //Select event type
      personalEvents=[
        {
          id:1,
          name:"Birthday Party"
        },
        {
          id:2,
          name:"Anniversary Party"
        },
        {
          id:3,
          name:"Family Get Together"
        },
        {
          id:4,
          name:"House Warming"
        },
        {
          id:5,
          name:"Kitty Party"
        },
        {
          id:6,
          name:"Family Funciton"
        },
        {
          id:7,
          name:"Baby Shower"
        }
      ];

      personalevent:any;
      constructor(private personalEventService:PersonalEventService){
        this.personalevent=[];

      }

//---------------------------------POST DATA TO JSON---------------------------------
      // constructor(private http:Http){}

      // eventobj:object={};

      // addNewEvent= function(event){
      //   this.eventobj={
      //     "name":event.name,
      //     "personalEvents":event.personalEvents,
      //     "dateFrom":event.dateFrom,
      //     "dateTo":event.dateTo,
      //     "timeStart":event.timeStart,
      //     "timeEnd":event.timeEnd
      //   }
      //   this.http.post("http://localhost:3000/events", this.eventobj).subscribe(
      //     (res:Response)=>{
      //       console.log(res);
      //       // this.isAdded=true;
      //     }
      //   )
      // }
//-------------------------------------------------------------------------------------      

  ngOnInit() {
    
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.personalEventService.addPersonalEvent(form.value)
    .subscribe((data)=>{
      console.log(data);
    })
    alert(form.value.userName+'has been added');
    this.resetForm(form);
  }

  resetForm(form?:NgForm){
    if(form !=null)
    form.reset();

    this.personalEventService.selectedPersonalEvent.emit({
    key:0,
    name:'',
    personalevents:'',
    datefrom:'2018-08-14',
    dateto:'2018-08-15',
    timestart:'12:30',
    timeend:'2:30'
    })
  }

}
