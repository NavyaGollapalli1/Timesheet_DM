import { Injectable } from "@angular/core";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IUser } from "./user";
import { UserForm } from "./userform";
import { Myuser } from "./shared/MyUser";

@Injectable({
     providedIn: 'root'
     
})

export class EmployeesService {
     private usersUrl = 'http://localhost:8080/users/';
    slice: any;
     MyUser: any;
 
     constructor(private http: HttpClient) { }



     getUsers(): Observable<IUser[]> {
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

     getUser(userId: number){
          return this.http.get(`http://localhost:8080/users/edit/${userId}`);
     }

     createUsers(user:Myuser) {
          this.http.post<{name:string}>(this.usersUrl,user).subscribe(
               (response)=>{
                    console.log(response);
                    alert('Employee created successfully');
               }
          );
          
     }

     updateUsers(user:Myuser) {
          
          this.http.put<{name:string}>(this.usersUrl,user).subscribe(
               (res)=>{
                    console.log(res);
               }
          );
          
     }

     deleteUser(userId:string) {
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
