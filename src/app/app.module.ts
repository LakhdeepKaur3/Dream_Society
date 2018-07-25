import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes : Routes =[
  {path : ' ' ,component : HeaderComponent},
  {path : 'admin-dashboard' ,component : AdminDashboardComponent},
  {path : 'user-dashboard' ,component : UserDashboardComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
