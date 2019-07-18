import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';
import { Driver } from 'selenium-webdriver/opera';
import { User } from '../user';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private drinkServ:DrinkService) { }

  ngOnInit() {
    this.getPresets();
  }

  getPresets() 
  {
    this.drinkServ.getDranks().subscribe((result) => 
    {
      var d = JSON.parse(JSON.stringify(result));

      for(let dObj of d){
        //console.log(dObj);
        let drank:Drink = dObj;
        this.drinks.push(drank);
      }
    });
  }

  drinks = [];
  amount:number;
  selected:number;
  time:number;
  liquidType:string;
  bac:number;
  bacLevel = [];

  u:User;

  calcBAC(){
    this.u = JSON.parse(window.sessionStorage.getItem("userobj"));

    var genderMultiplier:number = (this.u.gender == 'Male') ? 0.6 : 0.55;
    var liquidMultiplier:number = (this.liquidType == "liter") ? 1000 : 29.6;

    console.log(this.amount);
    console.log(this.selected[0]);
    console.log(this.u.bodyweight);
    console.log(this.time);
    console.log(this.u.gender);
    console.log(this.liquidType);
    console.log(genderMultiplier);
    console.log(liquidMultiplier);

    this.bac = (((this.amount * liquidMultiplier) * this.selected[0]) / (this.u.bodyweight * genderMultiplier)) / 1000;
    console.log("Estimated blood alcohol at  hours: " + this.bac);

    this.generateValues();

  }

  generateValues(){
    var xdiff = this.bac / this.time;
    var x = 0;
    var xdown = this.bac;
    var hour = 0;
    var burn = 0.015;
    this.bacLevel = [];

    while(hour <= this.time){
      this.bacLevel.push(x);

      x += xdiff;
      hour++;
    }
    while(xdown >= 0.015){
      xdown -= burn;
      this.bacLevel.push(xdown);
    }
     console.log(this.bacLevel.toString());
  }
}
