import { Component } from '@angular/core';
import {patientBalanceList} from "../model/patients-balance";


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  componentName= "Patient Balance";
  patientBalanceList= patientBalanceList.slice(0, -2);

}
