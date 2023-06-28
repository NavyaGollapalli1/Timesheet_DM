import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employee/employees.service';
// import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    FilterPipe 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // UserServiceService
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
