import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employees-list.component';

describe('EmployeesListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent]
    });
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
