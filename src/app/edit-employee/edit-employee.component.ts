import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Subscription } from 'rxjs';
import { IUser } from '../user';
import { Myuser } from '../shared/MyUser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dm-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
  providers: [EmployeesService]
})
export class EditEmployeeComponent implements OnInit{
    editUser!: Myuser;
   sub!: Subscription;
   _users: IUser[] = [];

   userId!: any;
   user!: any;
   myFirstName!: string;

 editForm = new FormGroup({
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
contractOptions: string[] = ['FullTime', 'PartTime'];

changecontractOptions(e: any) {
  console.log(e.value)
  this.contract?.setValue(e.target.value, {
    onlySelf: true
  })
}
 

get firstName() {
  return this.editForm.get('firstName');
}
get lastName() {
  return this.editForm.get('lastName');
}
get email() {
  return this.editForm.get('email');
}
get password() {
  return this.editForm.get('password')
}
get mobileNumber() {
  return this.editForm.get('mobileNumber')
}
get contract() {
  return this.editForm.get('contract')
}
get designation() {
  return this.editForm.get('designation')
}

 
  constructor(private route: ActivatedRoute, private employeesService: EmployeesService){}
  ngOnInit(): void { 
    console.log('ngOnInit() of edit-employee **************');

    
    this.sub = this.route.params.subscribe(params => {

      console.log('this is from edit employee userId '+params['userId']);
      console.log('this is from edit employee firstName '+params['firstName']);

      this.myFirstName=params['firstName'];
      this.editUser = new Myuser(params['firstName'],null,null,null,null,null,null,null);

    
   })
  
  }


  editEmployee(){

    var formValues = this.editForm.value;
    var updateEmployee = new Myuser(formValues.firstName, formValues.lastName, formValues.email, formValues.password, formValues.mobileNumber,
      formValues.contract, formValues.designation, true);
      updateEmployee.userId=this.editUser.userId;

    this.employeesService.createUsers(updateEmployee); // becuase we dont have put for this we are using post for update
      
  }
  onSubmit()
  {}

}