import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserVendorService {

  constructor(private http: Http) { }

  getData(){
   return  this.http.get("http://localhost:3010/api");
  }
}
