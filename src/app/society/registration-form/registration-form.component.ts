import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registration } from "../society-shared/registration.model";
import { RegistrationService } from '../society-shared/registration.service';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  users=[ 'Owner','Tenant'];
  userHasError=true;

  // @Input('data') data ;
  constructor(private registration : RegistrationService){

  }

  _form = {
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
    this.resetForm();
    this.registration.selectedUser.subscribe((data)=>{
      this._form=data;
    });
  }

  validateService(value) {
    if (value == 'default') {
      this.userHasError = true;
    } else {
      this.userHasError = false;
    }
  }

  onSubmit(form: NgForm) {
    // if(form.value.key== ''){
    console.log(form.value);
    this.registration.addUser(form.value)
      .subscribe((data) => {
        console.log(data);
     });
     alert(form.value.user_name+' has been added');
    //  this.resetForm(form);
    // }
    this.resetForm(form);
  }

/////////////////////////////////---------------UPDATE FORM--------------------//////////////////////////  

onUpdate(form: NgForm){
  console.log(form.value);
  this.registration.updateUser(form.value,form.value.id)
  .subscribe((data)=>{
   console.log(data);
 });
 alert(form.value.user_name+' has been updated');
}
  

  
////////////////////////////////---------------RESET FORM--------------------///////////////////////////

  resetForm(form?:NgForm){
    if(form!=null)
      form.reset();
    
      this.registration.selectedUser.emit({
        key :0,
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
      })
  }

 
////////////////////////////////---------------DELETE FORM--------------------///////////////////////////

onDelete(form:NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    console.log(form.value);
    this.registration.deleteUser(form.value.id).subscribe((data)=>{
      console.log(data);
    })
    this.resetForm(form);
  }
}







  // onUpdate(form: NgForm){
  //   console.log(form.value);
  //   this.vendorservice.updateVendor(form.value,form.value.id)
  //   .subscribe((data)=>{
  //    console.log(data);
  //  });
  //  alert(form.value.userName+' has been updated');
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
  

