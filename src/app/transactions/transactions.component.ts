import { Component } from '@angular/core';
import { transactionsList } from "../model/transactions";
import {faBank, faMoneyBillTransfer, faWallet} from "@fortawesome/free-solid-svg-icons";



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactionsList = transactionsList;
  faWallet = faWallet;
  faBank = faBank;
  faMoneyBillTransfer = faMoneyBillTransfer;

}
