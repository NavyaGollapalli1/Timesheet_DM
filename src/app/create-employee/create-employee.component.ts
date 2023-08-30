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
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  password: FormControl<string | null> | undefined;


  

  constructor(private employeesService: EmployeesService) {

  }


  ngOnInit(): void {

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),

    ])
  }

  ngOnDestroy(): void {
    
  }



  createEmployee() {
    this.user = <Myuser>this.userForm.value;
    this.employeesService.createUsers(this.user);// testing...

  }
}
