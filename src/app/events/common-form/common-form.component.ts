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
  commonEvents = [
    "Holi",
    "Diwali",
    "Durga Puja",
    "Dussehra",
    "Christmas",
    "New Year",
    "Independence Day",
    "Republic Day",
    "Janmashtmi",
    "Eid",
    "Baisakhi",
    "Lohri",
    "Makar Sankaranti",
    "other"
  ];

  EventsHasError = true;

  events: any;
  constructor(private commonEventService: CommonEventService) {
    this.events = [];
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
    alert(form.value.userName + ' has been added');
    this.resetForm(form);

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

  refetchEvents() {
    this.commonEventService.getCommonEvent()
      .subscribe((event) => {
        this.events = (JSON.parse(event["_body"]));
        console.log(this.events);
      });
  }
  onDelete(id) {
    if (confirm('Are you sure to delete this record ?') == true) {

      this.commonEventService.deleteCommonEvent(id).subscribe(response => {
        console.log(response);
        this.refetchEvents();
      })
    }
  }
  onUpdate(form: NgForm) {
    console.log(form.value);
    this.commonEventService.updateCommonEvent(form.value, form.value.id)
      .subscribe((data) => {
        console.log(data);
      });
    alert(form.value.commonevents + ' has been updated');

  }
  onItemClick(event: CommonEvent) {

    console.log("Event", event);
    console.log(event);
    this.commonEventService.selectedCommonEvent.emit(event);
  }
}


