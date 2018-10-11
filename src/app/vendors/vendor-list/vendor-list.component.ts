import { Component, OnInit } from '@angular/core';
import {VendorService} from '../shared/vendor.service'
import { Vendor } from '../shared/vendor.model';
import { FilterpipePipes } from "./filterpipes.pipe";
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors:Vendor[];
  filteredVendor:Vendor[];
  private _searchTerm:string;

constructor(private vendorService:VendorService) { 
this.vendors=[];
}


get searchTerm():string{
  return this._searchTerm;
}

set searchTerm(value:string){
  this._searchTerm = value;
  this.filteredVendor = this.filterVendor(value);
}

filterVendor(searchString:string){

  return this.vendors.filter(ven=>ven.firstname.toLowerCase().indexOf(searchString.toLowerCase()) > -1)
}

  ngOnInit() {
    this.refetchVendors();
  }
  refetchVendors(){
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
