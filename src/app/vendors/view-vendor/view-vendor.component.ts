import { Component, OnInit } from '@angular/core';
import { UserVendorService} from '../shared/uservendor'
import { UserVendorListComponent } from "../user-vendor-list/user-vendor-list.component";

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.css']
})
export class ViewVendorComponent implements OnInit {

  constructor(private httpService:UserVendorService) { }

  datas: any =[
  ];
    
    clickMe(){
      console.log("Add vendor working");
    }

    bookVendor(){
      console.log("Book vendor working");
    }

    editVendor(){
      console.log("Edit vendor working");
    }

    deleteVendor(){
      console.log("Delete vendor working");
    }

  ngOnInit(){
      // this.httpService.getData().subscribe(data => {
      //   this.datas = data;
      //   console.log("a",this.datas)});
      this.httpService.getData()
    .subscribe((data)=>{
      this.datas=(JSON.parse(data["_body"]));
      console.log(this.datas);
    });
  }
}
