import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userServ:UserService) { }

  user:User = new User();

  register()
  {
    this.userServ.register(this.user);
  }

  ngOnInit() {
  }

}
