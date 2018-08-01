import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/header/header.component';
import { AdminDashboardComponent } from './home-page/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './home-page/user-dashboard/user-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryformComponent } from './home-page/queryform/queryform.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorComponent } from './vendors/vendor/vendor.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { HttpModule } from '@angular/http'
import { ViewVendorComponent } from './vendors/view-vendor/view-vendor.component';
import { UserVendorListComponent } from './vendors/user-vendor-list/user-vendor-list.component';
import {UserVendorService} from './vendors/shared/uservendor'
import { CommonFormComponent } from './events/common-form/common-form.component';
import { EventManagementComponent } from './events/event-management/event-management.component';
import { AdminPersonalFormComponent } from './events/admin-personal-form/admin-personal-form.component';
import { OwnerEventFormComponent } from './events/owner-event-form/owner-event-form.component';
import { HeaderContentComponent } from './home-page/header-content/header-content.component';
import { LightboxComponent } from './home-page/lightbox/lightbox.component';
import { LoginComponent } from './login/login.component';
import { ParkingComponent } from './parking/parking.component';
import { SocietyComponent } from './society/society.component';
import { OwnerFormComponent } from './society/owner-form/owner-form.component';
import { AdminFormComponent } from './society/admin-form/admin-form.component';
import { TenantFormComponent } from './society/tenant-form/tenant-form.component';

const routes: Routes = [
  //   { path: ' ', component: HeaderComponent },
  //   {
  //     path: 'admin-dashboard', component: AdminDashboardComponent,
  //     children: [{
  //       { path: 'vendor', component: VendorsComponent },
  //       {
  //         path: 'event-management', component: EventManagementComponent,
  //         children: [
  //           {path:'', redirectTo='common-form',pathMatch:'full'},
  //           { path: 'common-form', component: CommonFormComponent },
  //           { path: 'admin-personal-form', component: AdminPersonalFormComponent }
  //         ]
  //       }
  //     ]

  //   }
  // ]

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderContentComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'vendors', pathMatch: 'full' },
      { path: 'vendors', component: VendorsComponent },
      { path: 'parking', component: ParkingComponent},
      { path: 'society', component: SocietyComponent,
      children: [
        { path: '', redirectTo: 'owner', pathMatch: 'full' },
        { path: 'owner', component: OwnerFormComponent},
        { path: 'admin', component: AdminFormComponent },
        { path: 'tenant', component:TenantFormComponent },
      ]
    },
      {
        path: 'event-management', component: EventManagementComponent,
        children: [
          { path: '', redirectTo: 'common-form', pathMatch: 'full' },
          { path: 'common-form', component: CommonFormComponent },
          { path: 'admin-personal-form', component: AdminPersonalFormComponent },
        ]
      }
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent,
    children: [
      { path: '',redirectTo:'view-vendor', pathMatch: 'full' },
      {path : 'view-vendor' ,component : ViewVendorComponent},
      {path : 'user-vendor-form' ,component : UserVendorListComponent},
      {path:'owner-event-form', component:OwnerEventFormComponent},

    ]
  }
];


// {path : 'user-dashboard' ,component : UserDashboardComponent},
// {path:'common-form', component:CommonFormComponent},
// {path:'event-management', component:EventManagementComponent},
// {path:'admin-personal-form', component:AdminPersonalFormComponent},
// {path:'owner-event-form', component:OwnerEventFormComponent},
// {path:'vendors', component:VendorsComponent}





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    QueryformComponent,
    CommonFormComponent,
    EventManagementComponent,
    AdminPersonalFormComponent,
    OwnerEventFormComponent,
    VendorsComponent,
    VendorComponent,
    VendorListComponent,
    HeaderContentComponent,
    ViewVendorComponent,
    UserVendorListComponent,
    LightboxComponent,
    LoginComponent,
    ParkingComponent,
    SocietyComponent,
    OwnerFormComponent,
    TenantFormComponent,
    AdminFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    // LightboxModule
  ],
  providers: [UserVendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
