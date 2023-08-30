import { Injectable } from "@angular/core";
// import { IEmployee } from "./employee";

import { Observable, catchError, map, tap, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IUser } from "../user";

@Injectable({
     providedIn: 'root'
})

export class EmployeesService {
     private employeeUrl = 'http://localhost:8080/users/';
     private usersUrl = 'http://localhost:8080/users/';
     private usersDataURL = './assets/data/users.json';
     constructor(private http: HttpClient) { }



     getUsers(): Observable<IUser[]> {
          console.log('getMyUsers++++++++++++ ' + this.usersUrl);
          return this.http.get<IUser[]>(this.usersUrl).pipe(
               map((res => {
                    const user = [];
                    for (const key in res) {
                         if (res.hasOwnProperty(key))
                              user.push({ ...res[key], id: res })
                         catchError(this.handleError)
                    }
                    return user;
               }

               ))
          );
     }

     createUsers(user:{"firstName": string,"lastName": string,"email": string,"password":string,"active":boolean}) {
          console.log('getMyUsers++++++++++++ ' + this.usersUrl);
          this.http.post<{name:string}>(this.usersUrl,user).subscribe(
               (res)=>{
                    console.log(res);
               }
          );
          
     }

     deleteUser(userId:string) {
          console.log('getMyUsers++++++++++++ ' + this.usersUrl);
          this.http.delete(this.usersUrl+userId).subscribe();
          
     }

     

   

     private handleError(err: HttpErrorResponse) {
          //in a real world app, we may send the server to some remote logging infrastructure
          //instead of just logging it to the console
          let errorMessage = '';
          if (err.error instanceof ErrorEvent) {
               //A client-side or network error occurred. Handle it accordingly.
               errorMessage = 'An error occurred: $(err.error.message}';
          } else {
               // The backend returned an unsuccessful response code.
               // The response body may contain clues as to what went wrong,
               errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
          }
          console.error(errorMessage);
          return throwError(() => errorMessage);
     }

}
