import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardHolidayListComponent } from './dasboard-holiday-list.component';

describe('DasboardHolidayListComponent', () => {
  let component: DasboardHolidayListComponent;
  let fixture: ComponentFixture<DasboardHolidayListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardHolidayListComponent]
    });
    fixture = TestBed.createComponent(DasboardHolidayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
