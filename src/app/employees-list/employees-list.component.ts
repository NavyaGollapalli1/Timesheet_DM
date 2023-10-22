

import { Component, OnDestroy, OnInit } from "@angular/core";

import { EmployeesService } from "../employees.service";
import { Subscription } from "rxjs";
import { IUser } from "../user";
import { CreateEmployeeComponent } from "../create-employee/create-employee.component";
import { Router } from "@angular/router";

@Component({
    selector: 'dm-employees-list',
    templateUrl: './employees-list.component.html',
    styleUrls: ['./employees-list.component.css'],
    providers: [EmployeesService]
})
export class EmployeeListComponent implements OnInit, OnDestroy {


    sub!: Subscription;
    _users: IUser[] = [];

filteredUsers: IUser[] = [];

   
  
    count: number =0;
    page: number =1;
    tableSize: number= 7;
    // tableSizePerPage: any = [5,10,15,20];
    errorMessage: any;

    constructor(private employeesService: EmployeesService,private router: Router) {
        //  this._users=this.employeesService.getUsers();
        // this.filteredUsers=this._users;

    }
    private _listFilter: string = '';
  get listFilter(): string{
     return this._listFilter;
     }
    set listFilter(value:string){
      this._listFilter= value;
  console.log('In setter:', value);
      this._users = this.performFilter(value);
     }

    

    ngOnInit(): void {
        this.postList();



         this.employeesService.getUsers().subscribe(
              (user) => {
                this._users = user;
                error: (err: any) => this.errorMessage = err
            }
        );
        
    }

    postList():void{
        this.employeesService.getUsers().subscribe((res)=>{
            this._users= res;
            console.log(this._users);
        })
    }

    filterResults(text:string){
        if(!text) {
            this.filteredUsers= this._users;
        }
        this.filteredUsers =this._users.filter(
            user =>
            user?.firstName.toLowerCase().includes(text.toLowerCase())
        );
    }

    performFilter(filterBy: string): IUser[] {
         filterBy = filterBy.toLocaleLowerCase();
       return this._users.filter((user: IUser) =>
      user.firstName.toLocaleLowerCase().includes(filterBy));
    //    user.userId.string().includes(filterBy));
     }

    onTableDataChange(event: any) {
        this.page = event;
        this.postList();
    }

    onTableSizeChange(event: any): void{
        this.tableSize = event.target.value;
        this.page = 1;
        this.postList();
    }

    ngOnDestroy(): void {
    }

    editEmployee(user: any){
        console.log('/edit/'+user.userId);
    
        this.router.navigate(['edit/',user.userId,user.firstName])
    }

}