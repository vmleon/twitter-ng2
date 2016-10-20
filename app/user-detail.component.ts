import { Component, Input } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'user-detail',
  template: `
    <div *ngIf="user">
      <h2>{{user.username}} details</h2>
      <div><label>id: </label>{{user.id}}</div>
      <div>
          <label>User name: </label>
          <input [(ngModel)]="user.username" placeholder="victorilloleon"/>
      </div>
    </div>
  `
})
export class UserDetailComponent {
  @Input()
  user: User;
}
