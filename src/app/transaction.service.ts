import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  serverUrl = "http://localhost:8081/";

  constructor(private http:HttpClient) { }

  getUserTransactions(userid:number)
  {
    let params = new HttpParams()
    .set('userid', String(userid));

    return this.http.post(this.serverUrl + "transaction/getUserTransactions.do", params);
  }

  saveUserTransaction(transaction:Transaction)
  {
    let params = new HttpParams()
    .set('amount', String(transaction.amount))
    .set('strength', String(transaction.strength))
    .set('userid', String(transaction.userid))
    .set('time', String(transaction.time))
    .set('gender', transaction.gender)
    .set('bodyweight', String(transaction.bodyweight));

    this.http.post(this.serverUrl + "transaction/setTransaction.do", params).subscribe((res) => {console.log("called setTransaction")});
  }

}
