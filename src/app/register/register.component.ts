import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServ:UserService, private routerThing: Router) { }

  user:User = new User();

  result:any;

  register()
  {
    this.userServ.register(this.user).subscribe((res)=>{
      this.result = res;
      console.log(this.result);
    });
    this.routerThing.navigate(["login"]);
  }

  ngOnInit() {
  }

}
