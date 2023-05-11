import {Component, Input, OnInit} from '@angular/core';
import {UserData} from "../model/userData.interface";
import {DoughnutInfo} from "../model/doughnutInfo.interface";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit{

  chartID1: string = "dough-chart1";
  chartID2: string = "dough-chart2";
  @Input() userData: UserData;
  @Input() MPRUserData: UserData;
  average: DoughnutInfo[] = new Array<DoughnutInfo>();
  total: DoughnutInfo[] = new Array<DoughnutInfo>();
  averagePerc: DoughnutInfo[] = new Array<DoughnutInfo>();
  constructor() {

  }

  prepareInfo(){
    this.MPRUserData.data.forEach(elem =>{
      let total: number = 0;
      let counter = 0;
      elem.value.forEach(value => {
        total+= value;
        counter++;
      });
      this.total.push(new DoughnutInfo(elem.label, total));
      this.average.push(new DoughnutInfo(elem.label, total/counter));
      let perc = parseFloat((((total/counter)/total)*100).toFixed(2));
      this.averagePerc.push(new DoughnutInfo(elem.label, perc));
    });

  }

  ngOnInit(): void {
    this.prepareInfo();
  }
}
