import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private drinkServ:DrinkService) { }

  ngOnInit() {
  }

  getPresets() 
  {
    this.drinkServ.getDrinks().subscribe((result) => 
    {
      this.drinks = JSON.parse(result.toString());
      
    });
    //this.drinks = JSON.parse(this.drinkServ.getDranks().toString());

  }

  drinks : Drink;
  //drinks = ["beer","wine","spirit"];
}
