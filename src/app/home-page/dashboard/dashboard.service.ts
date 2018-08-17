import { Injectable } from '@angular/core';
import  { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:Http) { }
 
  getData(){
    return this.http.get('http://localhost:3010/api/getData');
    
   }



}
