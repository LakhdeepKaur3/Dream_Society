import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
import  {NgForm} from '@angular/forms';
import {EventType} from '../event-shared/eventType.model';
 

@Component({
  selector: 'app-owner-event-form',
  templateUrl: './owner-event-form.component.html',
  styleUrls: ['./owner-event-form.component.css']
})
export class OwnerEventFormComponent implements OnInit {
  
  model={

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

      //Select society members
      // commonMembers=["Ajay Srivastava","Shankar Mahanjan","Sanjay Dutt","Sunil Kumar","Angad Negi"];
    
      //Select hall type
      // commonHalls=["Hall 1, Block A","Hall 2, Block B","Hall 3, Block C","Hall 4, Block D"]

      // personaleventsHasError=true;

      constructor(private http:Http){}

      eventobj:object={};

      addNewEvent= function(event){
        this.eventobj={
          "name":event.name,
          "personalEvents":event.personalEvents,
          "dateFrom":event.dateFrom,
          "dateTo":event.dateTo,
          "timeStart":event.timeStart,
          "timeEnd":event.timeEnd
        }
        this.http.post("http://localhost:3000/events", this.eventobj).subscribe(
          (res:Response)=>{
            console.log(res);
            // this.isAdded=true;
          }
        )
      }

  ngOnInit() {
    
  }

}
