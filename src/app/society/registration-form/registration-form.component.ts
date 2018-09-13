import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http} from '@angular/http'
import {RegistrationService} from '../society-shared/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  users=[ 'Owner','Tenant'];

  @Input('data') data ;
  constructor(private registration : RegistrationService){

  }

  model = {
    key:0,
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
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // if(form.value.key== ''){
    console.log(form.value);
    this.registration.addUser(form.value)
      .subscribe((data) => {
        console.log(data);
     })
     alert(form.value.user_name+' has been added');
    //  this.resetForm(form);
    // }
    // this.resetForm(form);
  }

  // onDelete(form:NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //     console.log(form.value);
  //     this.registration.deleteUser(form.value.id).subscribe(response=>{
  //       console.log(response);
  //     })
  //     // this.resetForm(form);
  //   }
  // }
  
}


  //////////////////////////////// ---------- post data to json --------------////////////////////////
//   constructor(private http:Http) { }

//   registerobj:object={};

//   saveRegistration=function(registration){
//     this.registerobj={
//       "first_name":registration.first_name,
//       "last_name":registration.last_name,
//       "age":registration.age,
//       "flat_id":registration.flat_id,
//       "phone_no":registration.phone_no,
//       "user_name":registration.user_name,
//       "email":registration.email,
//       "password":registration.password,
//       "aadharcardno":registration.aadharCardNo,
//       "gender":registration.gender,
//       "user_type":registration.user_type

// }
// this.http.post("http://localhost:3000/register", this.registerobj).subscribe(
//           (res:Response)=>{
//             console.log(res);
//           }
//         )
//   }
//////////////////////////////////////////////////////////////////////////////////////////////
  

