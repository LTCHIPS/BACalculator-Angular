import { Injectable } from '@angular/core';
import { Drink } from './drink';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  serverUrl = "http://localhost:8081/";

  getDranks() {
    return this.http.get(this.serverUrl + "drink/getDrinks.do");
  }

  constructor(private http: HttpClient) { }



}
