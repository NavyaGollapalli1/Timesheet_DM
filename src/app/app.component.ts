import { Component } from "@angular/core";
import users from './src/assets/data/users.json';

@Component({
  selector: 'dm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class= 'nav navbar-pills'>
  <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
  <li><a class='nav-link' routerLink='user'>Employees List</a></li>
  <li><a class='nav-link' routerLink='/welcome'>Add New Employee</a></li>

</ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>`
})

export class AppComponent {
  pageTitle: string ='Employee Timesheet';
}