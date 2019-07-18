import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrls: ['./forgotpw.component.css']
})
export class ForgotpwComponent implements OnInit {

  constructor(private userServ : UserService, private routerThing : Router) { }

  result : any;

  @Input()
  email : string;

  findPassword()
  {
    this.userServ.findPassword(this.email).subscribe((res)=>{
      this.result = res;
      console.log(this.result);
      this.routerThing.navigate(["login"]);
    });
  }

  alert()
  {
    alert("If your email is registered, your password will be sent to your email inbox.");
  }

  ngOnInit() {
  }

}
