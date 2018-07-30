import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/fontawesome-free';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { QueryformComponent } from './queryform/queryform.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { LightboxModule } from "angular2-lightbox";
import { LightboxComponent } from './lightbox/lightbox.component';
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
    UserDashboardComponent,
    QueryformComponent,
    LightboxComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    // LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
