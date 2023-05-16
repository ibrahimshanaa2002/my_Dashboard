import { Component } from '@angular/core';
import { transactionsList } from "../model/transactions";
import {faBank, faMoneyBillTransfer, faWallet} from "@fortawesome/free-solid-svg-icons";
import {patientBalance} from "../model/patients-balance";


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  patientBalanceList= patientBalance[0].Patient_section.slice(0, -2);

}
