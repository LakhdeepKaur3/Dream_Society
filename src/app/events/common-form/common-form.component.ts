import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'



@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent implements OnInit {

  model={

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

  // //Select society members
  // commonMembers=["Ajay Srivastava","Shankar Mahanjan","Sanjay Dutt","Sunil Kumar","Angad Negi"];

  // //Select hall type
  // commonHalls=["Hall 1, Block A","Hall 2, Block B","Hall 3, Block C","Hall 4, Block D"]
  
  constructor(private http:Http){

  }

  eventobj:object={};

  addCommonEvent= function(event){
    this.eventobj={
      "commonEvents":event.commonEvents,
      "dateFrom":event.dateFrom,
      "dateTo":event.dateTo,
      "timeStart":event.timeStart,
      "timeEnd":event.timeEnd
    }
    this.http.post("http://localhost:3000/commonevents", this.eventobj).subscribe(
          (res:Response)=>{
            console.log(res);
            // this.isAdded=true;
          }
        )
  }

  ngOnInit() {
  }

 
}


