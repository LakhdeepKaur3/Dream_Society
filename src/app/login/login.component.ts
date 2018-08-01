import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //    username : [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    //    password : [ '', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')]]
    // });
  }

  submit(): void {
    console.log('Login Info');
    console.log('Username' + this.loginForm.value.username);
    console.log('Password' + this.loginForm.value.password);
  }

}
