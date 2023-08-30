import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'dm-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent {

  weeklyForm = new FormGroup({
    Monday: new FormControl(''),
    Tuesday: new FormControl(''),
    Wednesday: new FormControl(''),
    Thursday: new FormControl(''),
    Friday: new FormControl(''),
    Saturday: new FormControl(''),
    Sunday: new FormControl('')
  });

  

}
