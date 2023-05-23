import { Component } from '@angular/core';
import { KPI } from "../model/KpiModel";
import { kpiData } from '../model/kpi';
import { Ikpi } from '../model/kpi.interface';


@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',

  styleUrls: ['./kpis.component.css']
})
export class KPISComponent {
  kpis:Ikpi[] = kpiData;
  showPopup = false;
  popupContent = 'ferferf';

  togglePopup(content: string) {
    this.popupContent = content;
    this.showPopup = !this.showPopup;
  }

}
