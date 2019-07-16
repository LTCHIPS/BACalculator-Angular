import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private routerThing:Router) { }

  ngOnInit() {
    if (window.sessionStorage.getItem("userobj") == undefined)
    {
      this.routerThing.navigate(['']); //GO HOME YOU DIDN'T LOG IN
    }
  }

  logout()
  {
    window.sessionStorage.clear();
    this.routerThing.navigate(['']);
  }

}
