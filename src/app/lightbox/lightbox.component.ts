import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  first_pic = "adults-airport-architecture-518244.jpg";
  constructor() { }
 images = [
  "assets/images/apartments-architectural-design-architecture-534233.jpg",
  "assets/images/architecture-building-business-284257.jpg",
  "assets/images/apartment-architectural-design-architecture-379940.jpg"
 ];
  ngOnInit() {
  }

}
