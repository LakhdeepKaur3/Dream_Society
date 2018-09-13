import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  data;
  constructor() { }

  ngOnInit() {
  }
  onItemSelected(data){
    this.data = data;
  }

}
