import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user/user.service';
import { User } from './user/user';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  users: User[];

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .then((users) => this.users = users.slice(0, 3));
  }

  goToDetails(user: User) {
    let link = ['/user-detail', user.id];
    this.router.navigate(link);
  }
}
