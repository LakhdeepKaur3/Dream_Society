import { Injectable,EventEmitter} from '@angular/core';
import { Http } from "@angular/http";
import {Registration} from './registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  selectedUser = new EventEmitter<Registration>();
  constructor(private _http: Http) { 
  }
    getUser(){
      return this._http.get('http://localhost:3001/api/getUser')
    }

    addUser(user){
      return this._http.post('http://localhost:3001/api/addUser',user)
    }
      
      updateUser(user:Registration,key:number){
        console.log(key);
        return this._http.put('http://localhost:3001/api/updateUser/'+key ,{
          user
        })
      }

      deleteUser(key:number){
        console.log("key",key);
        return this._http.delete('http://localhost:3001/api/deleteUser/'+key);
      }


    // deleteUser(key:number){
    //   console.log("key",key)
    //   return this._http.delete('http://localhost:3001/api/deleteUser/'+key);
    // }
  
    }
