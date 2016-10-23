import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail.component';

import { UserService } from './user.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule ],
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent ],
  providers: [
    UserService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
