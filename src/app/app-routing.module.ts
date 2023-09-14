import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employees-list/employees-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path:'employee-details', component:EmployeeDetailsComponent,
children:[
  {path:'employees-list', component:EmployeeListComponent},
  {path:'create-employee', component:CreateEmployeeComponent},
]},
  

  {path:'', redirectTo:'/employees-list', pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
