import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http} from '@angular/http'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {

  model = {
    first_name: '',
    last_name:'',
    age: '',
    flat_id:'',
    phone_no: '',
    user_name:'',
    email: '',
    password: '',
    aadharcardno: '',
    gender: '',
    user_type:''

  }
  constructor(private http:Http) { }

  registerobj:object={};

  saveRegistration=function(registration){
    this.registerobj={
      "first_name":registration.first_name,
      "last_name":registration.last_name,
      "age":registration.age,
      "flat_id":registration.flat_id,
      "phone_no":registration.phone_no,
      "user_name":registration.user_name,
      "email":registration.email,
      "password":registration.password,
      "aadharcardno":registration.aadharCardNo,
      "gender":registration.gender,
      "user_type":registration.user_type

}
this.http.post("http://localhost:3000/register", this.registerobj).subscribe(
          (res:Response)=>{
            console.log(res);
          }
        )
  }

  ngOnInit() {
  }
  
}


