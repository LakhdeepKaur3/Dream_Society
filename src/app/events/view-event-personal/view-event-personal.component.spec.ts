import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventPersonalComponent } from './view-event-personal.component';

describe('ViewEventPersonalComponent', () => {
  let component: ViewEventPersonalComponent;
  let fixture: ComponentFixture<ViewEventPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEventPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
