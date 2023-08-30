import { Component, OnDestroy, OnInit } from "@angular/core";

import { EmployeesService } from "./employees.service";
import { Subscription } from "rxjs";
import { IUser } from "../user";

@Component({
    
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    providers: [EmployeesService]
})
export class EmployeeListComponent implements OnInit, OnDestroy {
   
    sub!: Subscription;
    _users: IUser[] = [];

    
     errorMessage: any;

      constructor(private employeesService: EmployeesService) {

     }


    ngOnInit(): void {

        this.employeesService.getUsers().subscribe(
            (user) => {
                this._users = user;
                error: (err: any) => this.errorMessage =err
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        throw new Error("Method not implemented.");
    }


    
}