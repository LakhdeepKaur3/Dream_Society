import { Component, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-queryform',
  templateUrl: './queryform.component.html',
  styleUrls: ['./queryform.component.css']
})
export class QueryformComponent {
  AccConForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.AccConForm = this.fb.group({
      
      'FirstName': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(1500)])],
      'LastName': ['', Validators.compose([Validators.minLength(3), Validators.maxLength(1500)])],
      'Email': ['', Validators.compose([Validators.required, Validators.email])],
      'Mobile': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      'Message':['',Validators.required]
    });
  }

  



}
