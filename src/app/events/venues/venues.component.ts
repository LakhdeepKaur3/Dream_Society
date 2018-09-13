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
