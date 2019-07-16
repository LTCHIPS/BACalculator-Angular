import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  user : User;
  constructor(private userServ : UserService, private routerThing : Router) { }

  ngOnInit() 
  {
    if (window.sessionStorage.getItem("userobj") == undefined)
    {
      this.routerThing.navigate(['']); //GO HOME YOU DIDN'T LOG IN
    }

    else
    {
      this.user = new User();

      let sessionUser = JSON.parse(window.sessionStorage.getItem("userobj"));

      console.log(sessionUser);

      this.user.userid = sessionUser.userid;
      this.user.firstname = sessionUser.firstname;
      this.user.lastname = sessionUser.lastname;
      this.user.username = sessionUser.username;
      this.user.password = sessionUser.password;
      this.user.email = sessionUser.email;
      this.user.bodyweight = sessionUser.bodyweight;
      this.user.gender = sessionUser.gender;

    }

  }

  update() 
  {
    this.userServ.update(this.user);

  }
  
  
  


}
