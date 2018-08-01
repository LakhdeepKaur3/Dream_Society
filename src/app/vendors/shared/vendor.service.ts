import { Injectable, EventEmitter } from '@angular/core';
import { Vendor } from './vendor.model';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
selectedVendor=new EventEmitter<Vendor>();
  constructor(private _http:Http) { }
  addVendor(vendor){
    return this._http.post('http://localhost:3001/api/addVendor',vendor)
  }
  getVendor(){
    return this._http.get('http://localhost:3001/api/getVendor')
  }
  updateVendor(vendor:Vendor,key:number){
    console.log(key);
    return this._http.put('http://localhost:3001/api/updateVendor/'+key,{
      vendor
    })
  }
  deleteVendor(key:number){
    console.log("key",key)
    return this._http.delete('http://localhost:3001/api/deleteVendor/'+key);
  }
}
