import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule} from "ngx-pagination";
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

import { AssetsComponent } from './assets/assets/assets.component';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { AssetDetailComponent } from './assets/asset-detail/asset-detail.component';

import { MembersListComponent } from './events/members-list/members-list.component';
import { ViewEventComponent } from './events/view-event/view-event.component';
import { ViewEventPersonalComponent } from './events/view-event-personal/view-event-personal.component';
import {VenuesComponent} from './events/venues/venues.component';
import { CommonViewComponent } from './events/common-view/common-view.component';

import { SuperAdminProfileComponent } from './super-admin-profile/super-admin-profile.component';

import { SocietyComponent } from './society/society.component';
import { ViewBookedEventsComponent } from './events/view-booked-events/view-booked-events.component';
import {RegistrationFormComponent} from './society/registration-form/registration-form.component';
// import {RegistrationListComponent} from './society/registration-list/registration-list.component';
import {RegistrationService} from './society/society-shared/registration.service';
import { SearchComponent } from "./society/search/search.component";
import { FilterpipePipe } from "./society/search/filterpipe.pipe";
import { PagePipe } from "./society/search/page.pipe";


import { DashboardComponent } from './home-page/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { PiechartComponent } from './home-page/dashboard/charts/piechart/piechart.component';
import { DynamicChartComponent } from './home-page/dashboard/charts/dynamic-chart/dynamic-chart.component';
import { DoughnutChartComponent } from './home-page/dashboard/charts/doughnut-chart/doughnut-chart.component';
import { DashboardService } from './home-page/dashboard/dashboard.service';
import { FilterpipePipes } from './vendors/vendor-list/filterpipes.pipe';
import { LandingPageComponent } from './society/landing-page/landing-page.component';

 
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
  {path: 'gallery', component: LightboxComponent},
  
  {
    path: 'admin-dashboard', component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path:'dashboard', component:DashboardComponent },
      { path:'superProfile', component:SuperAdminProfileComponent },
      { path: 'vendors', component: VendorsComponent },
      { path: 'parking', component: ParkingComponent},
      { path: 'society', component: SocietyComponent,
      children: [
        {path:'landing-page', component:LandingPageComponent},
        { path: 'registration-form', component: RegistrationFormComponent},
        
    
      ]
    },
    { path: 'assets', component: AssetsComponent,
    children: [
      { path: '', redirectTo: 'assets', pathMatch: 'full' },
      { path: 'add-assets', component:AddAssetComponent},
      { path: 'view-assets', component: AssetDetailComponent },
    ]
  },
      {
        path: 'event-management', component: EventManagementComponent,
        children: [
          { path: '', redirectTo: 'view-event', pathMatch: 'full' },
          {path:'view-event', component:ViewEventComponent , 
        children: [
            { path: 'common-form', component: CommonFormComponent },
            { path: 'members-list', component: MembersListComponent},
            { path:'venues', component:VenuesComponent},
            {path:'view-booked-events', component:ViewBookedEventsComponent}
          ]},  
            // { path: 'admin-personal-form', component: AdminPersonalFormComponent },
        ]}
      ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent,
    children: [
      { path: '',redirectTo:'view-vendor', pathMatch: 'full' },
      {path : 'view-vendor' ,component : ViewVendorComponent},
      {path : 'user-vendor-form' ,component : UserVendorListComponent},
      {
        path: 'event-management', component: EventManagementComponent,
        children: [
          { path: '', redirectTo: 'view-event-personal', pathMatch: 'full' },
          {path:'view-event-personal', component:ViewEventPersonalComponent , 
        children: [
            { path: 'owner-event-form', component: OwnerEventFormComponent },
            { path: 'members-list', component: MembersListComponent},
            { path:'venues', component:VenuesComponent}
          ]},  
            // { path: 'admin-personal-form', component: AdminPersonalFormComponent },
        ]}
      //{path:'owner-event-form', component:OwnerEventFormComponent},

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
    AddAssetComponent,
    AssetsComponent,
    AssetDetailComponent,
    MembersListComponent,
    ViewEventComponent,
    ViewEventPersonalComponent,
    VenuesComponent,
    SuperAdminProfileComponent,
    ViewBookedEventsComponent,
    RegistrationFormComponent,
    DashboardComponent,
    PiechartComponent,
    DynamicChartComponent,
    DoughnutChartComponent,
    CommonViewComponent,
    // RegistrationListComponent,
    PagePipe,
    SearchComponent,
    FilterpipePipes,
    FilterpipePipe,
    LandingPageComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    // LightboxModule
  ],
  providers: [UserVendorService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
