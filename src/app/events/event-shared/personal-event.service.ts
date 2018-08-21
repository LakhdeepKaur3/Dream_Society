import { Injectable, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';
import {personalEvent} from './personalEvent.model';

@Injectable({
  providedIn: 'root'
})
export class PersonalEventService {

  selectedPersonalEvent=new EventEmitter<personalEvent>();

  constructor(private _http:Http) { }

  addPersonalEvent(event){
    return this._http.post("http://localhost:3001/api/addPersonalEvent",event);
  }

  getPersonalEvent(){
    return this._http.get('http://localhost:3001/api/getPersonalEvent')
  }
  updatePersonalEvent(event:Event,key:number){
    console.log(key);
    return this._http.put('http://localhost:3001/api/updatePersonalEvent/'+key,{
      event
    })
  }
  deletePersonalEvent(key:number){
    console.log("key",key)
    return this._http.delete('http://localhost:3001/api/deletePersonalEvent/'+key);
  }
}


