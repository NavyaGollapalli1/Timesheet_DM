import { Component } from '@angular/core';
import { HolidaysService } from '../holidays.service';
import { IHolidays } from '../holidays';

@Component({
  selector: 'dm-dasboard-holiday-list',
  templateUrl: './dasboard-holiday-list.component.html',
  styleUrls: ['./dasboard-holiday-list.component.css']
})
export class DasboardHolidayListComponent {
  holidays: IHolidays[] = [];

constructor(private holidaysService: HolidaysService){}

ngOnInit() {
  this.holidaysService.getHolidays().subscribe(holidays => {
    this.holidays = holidays;
  });
}
onSubmit(formValue: { name: any; date: any; }) {
  const newHoliday: IHolidays = {
    name: formValue.name,
    date: formValue.date
  };
  this.holidaysService.addHoliday(newHoliday);
}
}
