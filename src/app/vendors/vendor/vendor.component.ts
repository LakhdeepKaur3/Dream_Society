import { Component, OnInit, ViewChild } from '@angular/core';
import { VendorService } from '../shared/vendor.service'
import { NgForm } from '@angular/forms'
import { Vendor } from '../shared/vendor.model';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  services = ['Plumber', 'Electrician', 'Milkman', 'Grocer', 'Vegetable Seller', 'Carpenter', 'Painter',
    'Maid', 'Sweeper', 'Laundary', 'Guard', 'Beautician', 'Other'];
  serviceHasError = true;
  constructor(private vendorservice: VendorService) {

  }
  _form = {
    key: 0,
    firstname: '',
    lastname: '',
    gender: '',
    services: '',
    address: '',
    aadharNo:'' ,
    mobileNo: '',
    userName: '',
    email: '',
    charges: 0
  };

  ngOnInit() {
    this.resetForm();
    this.vendorservice.selectedVendor.subscribe((data)=>{
      this._form = data;
     
    });
  }
  validateService(value) {
    if (value == 'default') {
      this.serviceHasError = true;
    } else {
      this.serviceHasError = false;
    }
  }
  onSubmit(form: NgForm) {
    // if(form.value.key== ''){
    console.log(form.value);
    this.vendorservice.addVendor(form.value)
      .subscribe((data) => {
        console.log(data);
     })
     alert(form.value.userName+' has been added');
     this.resetForm(form);
    // }
    // this.resetForm(form);
  }
  
  onUpdate(form: NgForm){
    console.log(form.value);
    this.vendorservice.updateVendor(form.value,form.value.id)
    .subscribe((data)=>{
     console.log(data);
   });
   alert(form.value.userName+' has been updated');
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

    this.vendorservice.selectedVendor.emit({
      key: 0,
      firstname: '',
      lastname: '',
      gender: '',
      services: '',
      address: '',
      aadharNo:'' ,
      mobileNo: '',
      userName: '',
      email: '',
      charges: 0
    });
  }
  onDelete(form:NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      console.log(form.value);
      this.vendorservice.deleteVendor(form.value.id).subscribe(response=>{
        console.log(response);
      })
      // this.resetForm(form);
    }
  }



}
