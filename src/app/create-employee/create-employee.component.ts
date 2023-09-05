import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Myuser } from '../shared/MyUser';


@Component({
  selector: 'dm-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {
 

  private user: Myuser = new Myuser();
  userForm = new FormGroup({
    firstName: new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    email: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    password: new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    mobileNumber: new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    contract: new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    designation: new FormControl(null,[Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    address: new FormControl(null)
  });
 


  constructor(private employeesService: EmployeesService) {

  }

  ngOnInit(): void {
  }
  
 
  


  ngOnDestroy(): void {
    
  }

   createEmployee() {
    // this.user = <Myuser>this.userForm.value;
     this.employeesService.createUsers(this.user);

   }

  
}
