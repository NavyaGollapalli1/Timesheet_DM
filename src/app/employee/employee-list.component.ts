import { Component, OnDestroy, OnInit } from "@angular/core";

import { EmployeesService } from "./employees.service";
import { Subscription } from "rxjs";
import { IUser } from "../user";

@Component({
    selector: 'dm-employee',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    providers: [EmployeesService]
})
export class EmployeeListComponent implements OnInit, OnDestroy {
    // pageTitle: string = 'Employee List';
    // imageWidth: number = 50;
    // imageMargin: number = 50;
    // showImage: boolean = false;
    //sub: Subscription ;
    _users: IUser[] = [];

    filteredUsers: IUser[] = [];


    private _listFilter: string = '';
    errorMessage: any;
    get listFilter(): string {
        return this._listFilter
    }

    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredUsers = this.performFilter(value);
    }




    constructor(private employeesService: EmployeesService) {

    }


    performFilter(filterBy: string): IUser[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this._users.filter((user: IUser) =>
            user.firstName.toLocaleLowerCase().includes(filterBy));

    }

    // toggleImage(): void {
    //     this.showImage = !this.showImage;
    // }

    ngOnInit(): void {

        this.employeesService.getUsers().subscribe(
            (users) => {
                this._users = users;
            }
        );
    }

    ngOnDestroy(): void {

        throw new Error("Method not implemented.");
    }


    createUser() {
        let user = {
            "firstName": "mic",
            "lastName": "el",
            "email": "emailaddress2@abc.com",
            "password": "azertyui",
            "active": true
        }

        this.employeesService.createUsers(user);
    }

    deleteUser() {
        let user = {
            "firstName": "mic",
            "lastName": "el",
            "email": "emailaddress1@abc.com",
            "password": "azertyui",
            "active": true
        }
        this.employeesService.deleteUser("9");
    }


}