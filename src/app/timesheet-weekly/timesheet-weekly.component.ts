import { Component } from '@angular/core';
import { ITimesheet } from '../timesheet';
import { TimesheetService } from '../timesheet.service';

@Component({
  selector: 'dm-timesheet-weekly',
  templateUrl: './timesheet-weekly.component.html',
  styleUrls: ['./timesheet-weekly.component.css']
})
export class TimesheetWeeklyComponent {
  pageTitle: string = 'Weekly Timesheet';

  selectedWeekStartDate!: string; // Holds the selected week's start date

  changeWeek() {
    // Parse the selected date string to a JavaScript Date object
    const selectedDate = new Date(this.selectedWeekStartDate);

    // Calculate the day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const dayOfWeek = selectedDate.getDay();

    // Calculate the difference between the selected day and the start of the week (usually Sunday)
    const difference = dayOfWeek - 0; // Adjust 0 if your week starts on a different day

    // Calculate the start date of the week by subtracting the difference from the selected date
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - difference);

    // Convert the start date of the week to a string in ISO format
    const startOfWeekISO = startOfWeek.toISOString().split('T')[0];

    // Now you have the start date of the selected week
    console.log('Start Date of Selected Week:', startOfWeekISO);
    console.log('Selected Week Start Date:', this.selectedWeekStartDate);
    // You can now use this date to update your timesheet view
}

timesheet: ITimesheet = {
  date: '', // Initialize with a default value or leave it empty
  hoursWorked: 0,
  task: ''
  // Add other properties as needed
};

constructor(private timesheetService: TimesheetService) {}

submitTimesheet() {
  // Send the timesheet data to the service for processing/storage
  this.timesheetService.addTimesheet(this.timesheet);
}
}
