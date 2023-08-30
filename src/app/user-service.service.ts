import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8080/users/";

  constructor(private http: HttpClient) { }
  
  public getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.baseUrl)
  
  }
}
