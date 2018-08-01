import { Component, OnInit } from '@angular/core';
import {VendorService} from '../shared/vendor.service'
import { Vendor } from '../shared/vendor.model';
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors:any;
constructor(private vendorService:VendorService) { 
this.vendors=[];
}
  ngOnInit() {
    this.fetchVendors();
  }
  fetchVendors(){
    this.vendorService.getVendor()
    .subscribe((data)=>{
      this.vendors=(JSON.parse(data["_body"]));
      console.log(this.vendors);
    });
  }
  onItemClick(vendor:Vendor){
    // this.vendorService.selectedVendor=vendor;
    console.log("vendor",vendor);
    console.log(vendor);
    this.vendorService.selectedVendor.emit(vendor);
  }
}
