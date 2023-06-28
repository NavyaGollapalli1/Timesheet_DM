import { Injectable } from "@angular/core";
import { IUser } from "../user";
import { UserServiceService } from "../user-service.service";

@Injectable({
    providedIn: 'root'
})

export class NewEmployeeService {
    _users: IUser[] = [];


    addNewEmployee(user: IUser){
        this._users.push(user);
    }

    clearUser(){
        this._users =[];
        return this._users;
    }
}