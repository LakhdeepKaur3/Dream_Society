import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RegistrationService } from '../society-shared/registration.service';
import {Registration} from '../society-shared/registration.model';
import {FilterpipePipe} from './filterpipe.pipe'; 



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users:Registration[];
  filteredRegistration: Registration[];
  private _searchTerm: string;
  p:number=1;t
  dataRefresher:any;
  
  
  get serchTerm(): string{
    return this._searchTerm;
  }
  
  
  set searchTerm(value: string){
    this._searchTerm =value;
     }
  

  

  
  // first_name:any;
  // email:any;
  
  // @Output('itemSelected') itemSelected = new EventEmitter();
  

  constructor(private registrationservice:RegistrationService) {
    // this.users=[];
   }

  //  onItemClicked(registration){
  //   this.itemSelected.emit(registration);
  //  }

  ngOnInit() {
      this.refetchUsers();
      // this.registrationservice.getUser();
      this.filteredRegistration= this.users;
      this.dataRefresher = setInterval(()=>{
        this.registrationservice.getUser()
    .subscribe((data)=>{
      this.users=(JSON.parse(data["_body"]));
      console.log(this.users);
    });
      },3000)
      
    
    }

    ngOnDestroy(){
      clearInterval(this.dataRefresher);
    }
      // .subscribe((data)=>{
      //   this.registration=(JSON.parse(data["_body"]));
      //   console.log(this.registration);
      // });

      // this.registrationservice.getUser()
      // .subscribe(first_name => this.first_name=first_name);

  // onChange(){
  //   var reg = this.email;
  //    if(this.filter.flat_id){
  //     reg = reg.filter(v => v.flat_id == this.filter.flat_id);
  //    }
  //     this.users = reg;
  // }
  // resetFilter(){
  //   this.filter = {};
  //   this.onChange();
  // }
  refetchUsers(){
    this.registrationservice.getUser()
    .subscribe((data)=>{
      this.users=(JSON.parse(data["_body"]));
      console.log(this.users);
    });
    
  }

  onItemClick(registration:Registration){
    console.log("registration",registration);
    console.log(registration);
    this.registrationservice.selectedUser.emit(registration);
  }  
  


}
 