import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetMonthlyComponent } from './timesheet-monthly.component';

describe('TimesheetMonthlyComponent', () => {
  let component: TimesheetMonthlyComponent;
  let fixture: ComponentFixture<TimesheetMonthlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetMonthlyComponent]
    });
    fixture = TestBed.createComponent(TimesheetMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
