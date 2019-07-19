import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { User } from '../user';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {

  constructor(private transactionServ: TransactionService) { }

  ngOnInit() {
    this.loadTable();
  }

  u:User;
  transactions = [];

  loadTable(){
    this.u = JSON.parse(window.sessionStorage.getItem("userobj"));

    this.transactionServ.getUserTransactions(this.u.userid).subscribe((res)=>{
        var t = JSON.parse(JSON.stringify(res));

        for(let tObj of t){
          console.log()
          let tran:Transaction = tObj;
          this.transactions.push(tran);
        }
    })
  }
}
