import { Component } from "@angular/core";
import users from './src/assets/data/users.json';

@Component({
  selector: 'dm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string ='Employee Timesheet';
}