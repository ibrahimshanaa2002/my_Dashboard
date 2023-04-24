import { Component } from '@angular/core';
import { transactionsList } from "../model/transactions";
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactionsList = transactionsList;

}
