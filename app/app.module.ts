import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './user/users.component';
import { UserDetailComponent } from './user/user-detail.component';
import { DashboardComponent } from './dashboard.component';

import { UserService } from './user/user.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ])
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
