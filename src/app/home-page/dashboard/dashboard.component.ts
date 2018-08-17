import { Component, OnInit, DoCheck } from '@angular/core';
import{DashboardService } from './dashboard.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private appservice:DashboardService) { }
data:any;
  displayData(){
    this.appservice.getData().subscribe((response:Response)=>{
      this.data =response.json();
      console.log(this.data);

    })
  }

  ngOnInit(){
    this.displayData();
  }
  
 

}
