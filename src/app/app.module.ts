import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employee/employees.service';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { RouterModule } from '@angular/router';

// import { UserServiceService } from './user-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    FilterPipe,
    EmployeeDetailComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'user', component: EmployeeListComponent},
      {path: 'user/id', component: EmployeeDetailComponent},
      //{path: 'welcome', component: WelcomeComponent},
      //{path: '', redirectTo: 'welcome', pathMatch: 'full'},
      //{path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
   
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
