import { Component} from '@angular/core';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent{
flatno:any;
selectedAll:any;
constructor(){
  this.societyMembers
}

_form={
  key:0,
  name:''
}

societyMembers=[
  {name:'Harpreet',flatno:'BlockA101', selected:false},
  {name:'Kartik',flatno:'BlockA102',selected:false},
  {name:'Shanu',flatno:'BlockA103',selected:false},
  {name:'Kunal',flatno:'BlockA104',selected:false},
  {name:'Pragati',flatno:'BlockA105',selected:false},
  {name:'Dheeraj',flatno:'BlockB101',selected:false},
  {name:'Nikhil',flatno:'BlockB102',selected:false},
  {name:'Jyoti',flatno:'BlockB103',selected:false},
  {name:'Ritu',flatno:'BlockB104',selected:false},
  {name:'Ritu',flatno:'BlockB105',selected:false},

]

selectAll(){
  for(var i=0;i<this.societyMembers.length;i++){
    this.societyMembers[i].selected = this.selectedAll;
  }
}
  checkedIfAllSelected(){
    this.selectedAll=this.societyMembers.every(function(item:any){
      return item.selected == true;
    })
  }
}
