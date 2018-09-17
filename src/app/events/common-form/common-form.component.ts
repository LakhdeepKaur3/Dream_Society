import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CommonEventService } from '../event-shared/common-event.service';
import { NgForm } from '@angular/forms';
import { CommonEvent } from '../event-shared/commonEvent.model';



@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent implements OnInit {

  //Select event type
  commonEvents = ["Holi" , "Diwali" , "Durga Puja" , "Dussehra" , "Christmas" , "New Year" , "Independence Day" , "Republic Day" , "Janmashtmi" ,
    "Eid" , "Baisakhi" , "Lohri" , "Makar Sankaranti" , "other" ];

  EventsHasError = true;

  events: any;
  commonevent:any;
  constructor(private commonEventService: CommonEventService) {
    // this.events = [];
    // this.commonevent=[];
  }


  _form = {
    key: 0,
    commonevents: '',
    datefrom: '',
    dateto: '',
    timestart: '',
    timeend: ''
  }

  ngOnInit() {
    this.refetchEvents();
    this.commonEventService.selectedCommonEvent.subscribe((commonevent)=>{
      this._form = commonevent;
     
    });

  }

  validateEvent(value) {
    if (value == 'default') {
      this.EventsHasError = true;
    } else {
      this.EventsHasError = false;
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.commonEventService.addCommonEvent(form.value)
      .subscribe((data) => {
        console.log(data);
      })
    alert(form.value.commonevents + ' has been added');
    this.resetForm(form);

  }

  onUpdate(form: NgForm) {
    console.log(form.value);
    this.commonEventService.updateCommonEvent(form.value,form.value.id)
      .subscribe((data) => {
        console.log(data);
      });
    alert(form.value.commonevents + ' has been updated');
  }

  resetForm(form?: NgForm) {

    if (form != null)
      form.reset();

    this.commonEventService.selectedCommonEvent.emit({
      key: 0,
      commonevents: '',
      datefrom: '',
      dateto: '',
      timestart: '',
      timeend: ''
    });
  }

  onDelete(form:NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
     console.log(form.value);
      this.commonEventService.deleteCommonEvent(form.value.id).subscribe(response => {
        console.log(response);
        // this.refetchEvents();
      })
    }
  }

  refetchEvents() {
    this.commonEventService.getCommonEvent()
      .subscribe((data) => {
        this.events = (JSON.parse(data["_body"]));
        console.log(this.events);
      });
  }

  onItemClick(commonevent: CommonEvent) {
    console.log("Common Events",commonevent);
    console.log(commonevent);
    this.commonEventService.selectedCommonEvent.emit(commonevent);
  }
  
}


