import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServ : UserService, private routerThing : Router) 
  {


  }
  
  result : any;

  @Input()
  username : string;

  @Input()
  password : string;

  login()
  {
    console.log("Username: ", this.username);
    console.log("Password: ", this.password);
    this.userServ.login(this.username, this.password).subscribe((res)=>
    {
      this.result = res;
      console.log(this.result);

      //store user object returned by controller as a string locally
      window.sessionStorage.setItem("userobj", JSON.stringify(res));

      this.routerThing.navigate(["welcome"]);

    });

  }

  ngOnInit() {
  }



}
