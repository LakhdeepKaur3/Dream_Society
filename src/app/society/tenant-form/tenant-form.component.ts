import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.css']
})
export class TenantFormComponent {
  model={
    admin_id:'',
    name:'',
    age:'',
    address:'',
    phone_no:'',
    
    password:'',
    confirm_password:'',
    aadhar_card:'',
    gender:''

  }





  constructor() {

   }


}
