import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  
  parkingForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.parkingForm = this.formBuilder.group({
       username : [ '', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
       vehicleno : [ '', [Validators.required, Validators.maxLength(12), Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])')]],
       flatno : [ '', [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z])')]],
       contactno: ['',[Validators.maxLength(10), Validators.pattern('[0-9]')]],
       wheelertype: ['',[Validators.pattern('2|4')]]
    });
  }

  submit(): void {
    console.log('Parking Info');
    console.log('Username' + this.parkingForm.value.username);
    console.log('Vehicle No' + this.parkingForm.value.vehicleno);
    console.log('Flat No' + this.parkingForm.value.flatno);
    console.log('Contact No' + this.parkingForm.value.contactno);
    console.log('Wheeler Type' + this.parkingForm.value.wheelertype);

  }
}
