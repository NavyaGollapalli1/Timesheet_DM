import {Component} from "@angular/core";
import { FormBuilder } from "@angular/forms";
//import { EmployeesService } from "./employees.service";
import { NewEmployeeService } from "./newemployee.service";

@Component({
    selector: 'dm-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})

export class NewEmployeeComponent {
   _users = this.newemployeeService.addNewEmployee(user: IUser);

   NewEmployeeForm = this.formBuilder.group({
        userId: '',
        firstName: '',
        lastName: '',
        email: ''
   });
   
    constructor(
        private newemployeeService: NewEmployeeService,
        private formBuilder: FormBuilder,
    ){}

    onSubmit(): void {
        this._users = this.newemployeeService.clearUser();
        console.warn('You have successfully added a new employee',
        this.NewEmployeeForm.value);
    }
}