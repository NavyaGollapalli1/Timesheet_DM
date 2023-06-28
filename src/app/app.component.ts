import { Component } from "@angular/core";
import users from './src/assets/data/users.json';

@Component({
  selector: 'dm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <dm-employee></dm-employee>
</div>
  `
})

export class AppComponent {
  pageTitle: string ='Employee Timesheet';
}