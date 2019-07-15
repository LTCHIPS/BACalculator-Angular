import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serverUrl = "http://localhost:4200/"

  constructor(private http: HttpClient) { }
  
  public register(user){
    return this.http.post(this.serverUrl + "users", user);
  }

  public login(username:string,password:string){
    let user = {"username":username, "password":password};
    return this.http.post(this.serverUrl + "users/login.do", user);
  }
}