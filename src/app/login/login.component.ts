import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServ : UserService) 
  {


  }
  

  @Input()
  username : string;

  @Input()
  password : string;

  login()
  {
    this.userServ.login(this.username, this.password);

  }

  ngOnInit() {
  }



}
