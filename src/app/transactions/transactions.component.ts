import { Component, Input, EventEmitter, Output, OnInit  } from '@angular/core';
import {patientBalanceList} from "../model/patients-balance";
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit{
  componentName= "Patient Balance";
  patientBalanceList= patientBalanceList.slice(0, -2);


  selectedOption: string;
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
    this.sharedService.selectedOption$.subscribe(option => {
      this.selectedOption = option;
    });
  }
  

}
