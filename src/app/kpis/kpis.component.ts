import { Component } from '@angular/core';
import {KPI} from "../model/KpiModel";

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.css']
})
export class KPISComponent {
  kpis: KPI[] = [
    {
      icon: '../assets/img/growth.png',
      value: '230K',
      subtitle: 'Sales'
    },
    {
      icon: '../assets/img/user.png',
      value: '240K',
      subtitle: 'Customers'
    },
    {
      icon: '../assets/img/product-return.png',
      value: '400K',
      subtitle: 'Products'
    },
    {
      icon: '../assets/img/profits.png',
      value: '500K',
      subtitle: 'Revenue'
    }
  ];
}
