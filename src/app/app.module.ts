import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';


import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './employees.service';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';

import { MyLeaveComponent } from './my-leave/my-leave.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DasboardHolidayListComponent } from './dasboard-holiday-list/dasboard-holiday-list.component';
import { TimesheetWeeklyComponent } from './timesheet-weekly/timesheet-weekly.component';
import { TimesheetMonthlyComponent } from './timesheet-monthly/timesheet-monthly.component';
import { ManageTimesheetComponent } from './manage-timesheet/manage-timesheet.component';
import { EmployeeComponent } from './employee/employee.component';




@NgModule({
  declarations: [
    AppComponent,
    
    FilterPipe,
    
   
   EmployeeDetailsComponent,
    CreateEmployeeComponent,
   EmployeeListComponent,
   MyTimesheetComponent,
  
   MyLeaveComponent,
   EditEmployeeComponent,
   DasboardHolidayListComponent,
   TimesheetWeeklyComponent,
   TimesheetMonthlyComponent,
   ManageTimesheetComponent,
   EmployeeComponent,
 
  // EmployeesService

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     
      { path: 'employees-list', component: EmployeeListComponent },
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: 'employee-details', component: EmployeeDetailsComponent },
      {path: 'my-timesheet', component: MyTimesheetComponent},
      
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
       {path: 'edit/:userId/:firstName' , component:EditEmployeeComponent},
       {path: 'dasboard-holiday-list', component:DasboardHolidayListComponent},
      {path: 'my-leave', component:MyLeaveComponent },
      {path: 'manage-timesheet', component:ManageTimesheetComponent},
      {path: 'timesheet-monthly', component:TimesheetMonthlyComponent },
      {path: 'timesheet-weekly', component:TimesheetWeeklyComponent }
    ])

  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
