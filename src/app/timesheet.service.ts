import { Injectable } from '@angular/core';
import { ITimesheet } from './timesheet';


@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  private timesheets: ITimesheet[] = [];

  constructor() {}

  getTimesheets(): ITimesheet[] {
    return this.timesheets;
  }

  addTimesheet(timesheet: ITimesheet): void {
    this.timesheets.push(timesheet);
  }
}
