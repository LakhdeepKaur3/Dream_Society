import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent  {
  model={
    admin_id:'',
    name:'',
    age:'',
    address:'',
    phone_no:'',
    email:'',
    password:'',
    confirm_password:'',
    aadhar_card:'',
    gender:''

  }
  constructor() { }

  
  }


