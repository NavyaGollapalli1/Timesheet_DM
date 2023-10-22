import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetWeeklyComponent } from './timesheet-weekly.component';

describe('TimesheetWeeklyComponent', () => {
  let component: TimesheetWeeklyComponent;
  let fixture: ComponentFixture<TimesheetWeeklyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetWeeklyComponent]
    });
    fixture = TestBed.createComponent(TimesheetWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
