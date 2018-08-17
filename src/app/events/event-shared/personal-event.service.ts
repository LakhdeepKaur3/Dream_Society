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
}
