import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  isValid:boolean;
  toggle(){
    this.isValid =!this.isValid;
  }

  constructor() { }

  ngOnInit() {
  }

}
