import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookedEventsComponent } from './view-booked-events.component';

describe('ViewBookedEventsComponent', () => {
  let component: ViewBookedEventsComponent;
  let fixture: ComponentFixture<ViewBookedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
