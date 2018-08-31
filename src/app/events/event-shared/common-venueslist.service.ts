import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {CommonVenuesList} from './common-venueslist.model';


// @Injectable({
//   providedIn: 'root'
// })
// export class CommonVenueslistService {

//   constructor() { }
// }

@Injectable({
  providedIn:'root'
})

export class CommonVenueslistService {


  constructor(private _httpService:Http){

  }

  getVenuesList(){
  return  this._httpService.get('http://localhost:3001/api/getVenues')
  }

  
}
