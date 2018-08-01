import { Component, OnInit } from '@angular/core';
import {VendorService} from './shared/vendor.service';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css'],
  providers:[VendorService]
})
export class VendorsComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  ngOnInit() {
  }

}
