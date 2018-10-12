import { Pipe, PipeTransform } from '@angular/core';
import {Registration} from '../society-shared/registration.model';


@Pipe({
  name: 'filterpipe',
  
})
export class FilterpipePipe implements PipeTransform {
  private counter=0;
  
  transform(users: any, searchTerm:any): Registration[] {
    this.counter++;
    console.log('filter pipe executed count'+ this.counter);
    if(!users || !searchTerm){
      return users;
    }

   
 return users.filter(user=>
  user.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1 
);
  
  } 

  
    
  }

