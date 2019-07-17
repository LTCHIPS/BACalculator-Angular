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

    var bac = (this.u.bodyweight * genderMultiplier) / ((this.amount * liquidMultiplier) * this.selected[0]);
    console.log("Estimated blood alcohol at  hours: " + bac);
  }

//((this.amount * liquidMultiplier) * this.selected[0]) / (this.u.bodyweight * genderMultiplier)

  // getSelectedDrink(){
  //   console.log(this.selected)
  // }
}
