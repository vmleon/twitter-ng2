import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './user/users.component';
import { UserDetailComponent } from './user/user-detail.component';
import { DashboardComponent } from './dashboard.component';
import { UserService } from './user/user.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent ],
  providers: [
    UserService
  ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
