import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {
  first_pic = "adults-airport-architecture-518244.jpg"
  constructor() { }

  ngOnInit() {
  }

}
