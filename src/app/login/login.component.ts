import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router: Router){

  }
  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //    username : [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    //    password : [ '', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')]]
    // });
  }
  
  doLogin(data): void {
    console.log('Login Info');
    console.log(data);
    if(data.Username == '1' && data.Password == '1'){
      this.router.navigate(['admin-dashboard']);
      console.log("here");
      $('#myModal').modal('toggle');
    }
    else{
      this.router.navigate(['user-dashboard']);
      console.log("user here");
      $('#myModal').modal('toggle');
    }
  }

}
