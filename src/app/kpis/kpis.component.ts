import { Component } from '@angular/core';
import { KPI } from "../model/KpiModel";


@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',

  styleUrls: ['./kpis.component.css']
})
export class KPISComponent {
  kpis = [
    {
      icon: '../assets/img/growth.png',
      value: '$1,449.89',
      subtitle: 'Immediate payment',
      useracc: '1050$',
      userapp: '1000$',
      mpracc: '22',
      mprapp: '23'
    },
    {
      icon: '../assets/img/user.png',
      value: '-$2,475.16',
      subtitle: 'Auto Payment Plans',
      useracc: '1050$',
      userapp: '3000$',
      mpracc: '322$',
      mprapp: '100$'
    },
    {
      icon: '../assets/img/product-return.png',
      value: '1.49%',
      subtitle: 'Total',
      total1:'0.94%',
      total2:'0.55%'
      

    },
    {
      icon: '../assets/img/profits.png',
      value: '3.23%',
      subtitle: 'Response rate',

    }
  ];
  showPopup = false;
  popupContent = 'ferferf';

  togglePopup(content: string) {
    this.popupContent = content;
    this.showPopup = !this.showPopup;
  }

}
