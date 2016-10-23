import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  moduleId: module.id,
  selector: 'user-detail',
  templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent {
  @Input() user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.userService.getUserById(id)
        .then((user) => this.user = user);
    })
  }

  goBack() {
    this.location.back();
  }
}
