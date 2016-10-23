import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/users">Users</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title: string = 'Twitter users';
}
