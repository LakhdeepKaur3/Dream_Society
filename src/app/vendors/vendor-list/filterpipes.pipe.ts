import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from "../shared/vendor.model";

@Pipe({
  name: 'filterpipes'
})
export class FilterpipePipes implements PipeTransform {

private counter = 0;
  transform(vendors: any, searchTerm : any): Vendor[] {
    this.counter++;
    console.log("filter pipe excuted count ",this.counter);
    
    if(!vendors || !searchTerm){
      return vendors;
    }
    return vendors.filter(ven=>
      ven.firstname.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1 
    );
    
  }

}
