import { Component } from '@angular/core';
import { IUser } from '../user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dm-timesheet-monthly',
  templateUrl: './timesheet-monthly.component.html',
  styleUrls: ['./timesheet-monthly.component.css']
})
export class TimesheetMonthlyComponent {
  sub!: Subscription;
  _users: IUser[] = [];
  daysInMonth: { date: Date,hoursWorked: number }[] = []; 

  Monday!: number;
  Tuesday!: number;
  Wednesday!: number;
  Thursday!:number;
  Friday!: number;
  Saturday!: number;
  Sunday!: number;
  totalDays!:number;
  isWeekend: boolean=false;


  calculateTotalDays(){
    this.totalDays=this.Monday+this.Tuesday+this.Wednesday+this.Thursday+this.Friday;
  }

  ngOnInit() {
    this.generateDaysInMonth();
      const today = new Date();
      const dayOfWeek = today.getDay();
     this.isWeekend = (dayOfWeek === 6 || dayOfWeek === 0); // 6 is Saturday, 0 is Sunday
  }

  private generateDaysInMonth() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(year, month, day);
      this.daysInMonth.push({ date, hoursWorked : 0 });
    }
  }




  submitTimesheet() {
    // Process the timesheet data (this.daysInMonth)
    console.log('Timesheet data:', this.daysInMonth);
    
  }  
}
