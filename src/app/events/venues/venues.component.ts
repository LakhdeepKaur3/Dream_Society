import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
// import { NgForm } from '@angular/forms'
import {CommonVenueslistService} from '../event-shared/common-venueslist.service';
import {CommonVenuesList} from '../event-shared/common-venueslist.model'

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venueHead='Venues Details';


//   venueList=[
//     {
//       "vname":"The Rangeela",
//       "vtype":"Festive Grand Theatre",
//       "vlocation":"Block A",
//       "capacity":"5000",
//       "charges":"50000",
//       "availability":"available"
//   },
//   {
//     "vname":"Black Daimond",
//     "vtype":"Music Theatre",
//     "vlocation":"Block A",
//     "capacity":"2000",
//     "charges":"100000",
//     "availability":"available"
// },
// {
//   "vname":"The Kingdom of Jehovah",
//   "vtype":"Christian Auditorium",
//   "vlocation":"Block A",
//   "capacity":"5000",
//   "charges":"40000",
//   "availability":"available"

// },
// {
//   "vname":"NOOR",
//   "vtype":"Festive Grand Theatre",
//   "vlocation":"Block A",
//   "capacity":"6000",
//   "charges":"60000",
//   "availability":"Booked"

// }
// ]


venuesList:any;
  constructor(private commonVenueService:CommonVenueslistService) {
    this.venuesList=[];
   }

  ngOnInit() {
    this.getVenuesList();
  }
 

  getVenuesList(){
    this.commonVenueService.getVenuesList()
    .subscribe((event)=>{
      this.venuesList=(JSON.parse(event["_body"]));
      console.log(this.venuesList);
    });
  }
}
