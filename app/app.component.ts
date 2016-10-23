import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
    <users></users>
  `
})
export class AppComponent {
  title: string = 'Twitter users';
}
