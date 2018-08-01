import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVendorListComponent } from './user-vendor-list.component';

describe('UserVendorListComponent', () => {
  let component: UserVendorListComponent;
  let fixture: ComponentFixture<UserVendorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVendorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
