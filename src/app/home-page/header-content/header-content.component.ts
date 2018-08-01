import { Component, OnInit } from '@angular/core';
declare function require(path: string);
@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {

  constructor() { }
  firstslider=require('src/assets/images/2.jpg');
  secondslider=require('src/assets/images/1.jpg');
  thirdslider=require('src/assets/images/3.jpg');
  fourthslider=require('src/assets/images/4.jpg');
  fifthslider=require('src/assets/images/5.jpg');
  sixthslider=require('src/assets/images/6.jpg');
  ngOnInit() {
  }

}
