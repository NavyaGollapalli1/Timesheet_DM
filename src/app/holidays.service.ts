import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHolidays } from './holidays';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {
  private holidays: BehaviorSubject<IHolidays[]> = new BehaviorSubject<IHolidays[]>([]);

  getHolidays(): Observable<IHolidays[]> {
    return this.holidays.asObservable();
  }

  addHoliday(newHoliday: IHolidays) {
    const currentHolidays = this.holidays.value;
    currentHolidays.push(newHoliday);
    this.holidays.next(currentHolidays);
  }

  // Optional: Implement deleteHoliday method
}