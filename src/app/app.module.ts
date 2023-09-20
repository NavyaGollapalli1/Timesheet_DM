import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';

import { HomeComponent } from './employee/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employees-list/employees-list.component';
import { EmployeesService } from './employees.service';
import { MyTimesheetComponent } from './my-timesheet/my-timesheet.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { MyLeaveComponent } from './my-leave/my-leave.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';




@NgModule({
  declarations: [
    AppComponent,
    
    FilterPipe,
    
    HomeComponent,
   EmployeeDetailsComponent,
    CreateEmployeeComponent,
   EmployeeListComponent,
   MyTimesheetComponent,
   SuccessAlertComponent,
   MyLeaveComponent,
   EditEmployeeComponent
  // EmployeesService

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'Home', component: HomeComponent },
      { path: 'employees-list', component: EmployeeListComponent },
      { path: 'create-employee', component: CreateEmployeeComponent },
      { path: 'employee-details', component: EmployeeDetailsComponent },
      {path: 'my-timesheet', component: MyTimesheetComponent},
      {path: 'success-alert', component:SuccessAlertComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      {path:'/user,user:id', component:EditEmployeeComponent}
    ])

  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
