import { Component, OnInit } from '@angular/core';
declare function require(path: string);
@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  first_pic = "adults-airport-architecture-518244.jpg";
  constructor() { }
  
 first =require("src/assets/images/10 (1).jpg");
 second =require("src/assets/images/10 (2).jpg");
 third=require("src/assets/images/10 (3).jpg");
 fourth =require("src/assets/images/10 (4).jpg");
 fifth =require("src/assets/images/10 (8).jpg");
 sixth =require("src/assets/images/10 (6).jpg");
 seventh =require("src/assets/images/10 (7).jpg");
 eight =require("src/assets/images/8.jpg");
 images=[ require("src/assets/images/8.jpg"),
 require("src/assets/images/8.jpg"),
 require("src/assets/images/8.jpg")
]

  ngOnInit() {
  }

}
