import { Injectable, EventEmitter } from '@angular/core';
import {Http} from '@angular/http'
import { CommonEvent } from './commonEvent.model';
 
@Injectable({
  providedIn: 'root'
})
export class CommonEventService {
selectedCommonEvent=new EventEmitter<CommonEvent>();
  constructor(private _http:Http) { }

  addCommonEvent(commonevent){
    return this._http.post("http://localhost:3001/api/addCommonEvent",commonevent);
  }

  getCommonEvent(){
    return this._http.get('http://localhost:3001/api/getCommonEvent')
  }

  updateCommonEvent(commonevent:CommonEvent,key:number){
    console.log(key);
    return this._http.put('http://localhost:3001/api/updateCommonEvent/'+key,{
      commonevent
    })
  }

  deleteCommonEvent(key:number){
    console.log("key",key)
    return this._http.delete('http://localhost:3001/api/deleteCommonEvent/'+key);
    
  }
}


