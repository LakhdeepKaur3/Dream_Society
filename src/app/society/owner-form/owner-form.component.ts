import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent  {
  model={
    
    name:'',
    age:'',
    address:'',
    phone_no:'',
    password:'',
    confirm_password:'',
    aadhar_card:'',
    gender:''

  }
  constructor( ) { }


}
