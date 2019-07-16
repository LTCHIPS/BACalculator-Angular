import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';
import { Driver } from 'selenium-webdriver/opera';

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
}
