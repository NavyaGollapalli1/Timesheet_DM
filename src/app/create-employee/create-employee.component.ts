import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Myuser } from '../shared/MyUser';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';

@Component({
  selector: 'dm-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

  showSuccess = false;
  showEmptyFormAlert = false;

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+'), Validators.minLength(2), Validators.maxLength(30)])),
    lastName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+'), Validators.minLength(2), Validators.maxLength(30)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
    mobileNumber: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\+\d{11}$/), Validators.maxLength(16)])),
    contract: new FormControl('', Validators.compose([Validators.required])),
    designation: new FormControl('', Validators.compose([Validators.required])),
    address: new FormControl()
  });

  isSubmitted = false;
  contractOption: string[] = ['FullTime', 'PartTime'];

  changecontractOption(c: any) {
    console.log(c.value)
    this.contract?.setValue(c.target.value, {
      onlySelf: true
    })
  }



  get firstName() {
    return this.userForm.get('firstName');
  }
  get lastName() {
    return this.userForm.get('lastName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password')
  }
  get mobileNumber() {
    return this.userForm.get('mobileNumber')
  }
  get contract() {
    return this.userForm.get('contract')
  }
  get designation() {
    return this.userForm.get('designation')
  }



  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  createEmployee() {

    var formValues = this.userForm.value;
    var newEmployee = new Myuser(formValues.firstName, formValues.lastName, formValues.email, formValues.password, formValues.mobileNumber,
      formValues.contract, formValues.designation, true);
    this.employeesService.createUsers(newEmployee);

  }

  showAlert(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.showEmptyFormAlert = true;
      alert("Form failed to submittted");
      return;


    }
  }
  onSubmit() {



    // if (this. userForm.invalid) {
    //   this.userForm.markAllAsTouched();
    //   this.showEmptyFormAlert = true;
    //   alert("form submittted");
    //   return;
    // }
    // Logic for submitting the form

    // After successful submission, set showSuccess to true
    //  this.showSuccess = true;

    // setTimeout(() => {
    //   this.showSuccess = false;
    // }, 3000);
  }
}
