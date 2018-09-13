import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegistrationService } from '../society-shared/registration.service';
import {Registration} from '../society-shared/registration.model';


@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  users:any;
  @Output('itemSelected') itemSelected = new EventEmitter();
  
  constructor(private registrationservice:RegistrationService) {
    this.users=[];
   }

   onItemClicked(user){
    this.itemSelected.emit(user);
   }

  ngOnInit() {
    
      this.registrationservice.getUser()
      .subscribe((data)=>{
        this.users=(JSON.parse(data["_body"]));
        console.log(this.users);
      });
    
  }

  refetchUsers(){
    this.registrationservice.getUser()
    .subscribe((data)=>{
      this.users=(JSON.parse(data["_body"]));
      console.log(this.users);
    });
  }
  onItemClick(registration:Registration){
    console.log("registration",registration);
    console.log(registration);
    this.registrationservice.selectedUser.emit(registration);
  }  
}
