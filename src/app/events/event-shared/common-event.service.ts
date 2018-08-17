import { Injectable, EventEmitter } from '@angular/core';
import {Http} from '@angular/http'
import { CommonEvent } from './commonEvent.model';
 
@Injectable({
  providedIn: 'root'
})
export class CommonEventService {

selectedCommonEvent=new EventEmitter<CommonEvent>();
  constructor(private _http:Http) { }

  addCommonEvent(event){
    return this._http.post("http://localhost:3001/api/addCommonEvent",event);
  }
}


