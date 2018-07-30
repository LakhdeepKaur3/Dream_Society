import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
firstslider="assets/images/apartments-architectural-design-architecture-534233.jpg";
secondslider="assets/images/architecture-building-business-284257.jpg";
thirdslider="assets/images/apartment-architectural-design-architecture-379940.jpg";
  constructor() { }

  ngOnInit() {
  }

}
