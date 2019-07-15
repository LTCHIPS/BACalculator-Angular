import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://localhost:8081/"

  constructor(private http: HttpClient) { }
  
  public register(user:User){
    console.log(user);

    let params = new HttpParams()
    .set('username', user.username)
    .set('password', user.password)
    .set('firstname', user.firstname)
    .set('lastname', user.lastname)
    .set('email', user.email)
    .set('gender', user.gender)
    .set('bodyweight', String(user.bodyweight));

    let url = this.serverUrl + "users/register.do";

    console.log(url);

    return this.http.post(url, params);
  }

  public login(username:string,password:string){

    console.log(username);
    console.log(password);

    let params = new HttpParams()
    .set('username', username)
    .set('password', password);

    let user = {"username":username, "password":password};
    return this.http.post(this.serverUrl + "users/login.do", params);
  }


}