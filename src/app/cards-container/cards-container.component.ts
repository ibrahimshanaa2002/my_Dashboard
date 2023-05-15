import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {UserData} from "../model/userData.interface";
import {DoughnutInfo} from "../model/doughnutInfo.interface";


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit{
  @Input() userData: UserData;
  @Input() MPRUserData: UserData;
  @Input() depUserData1: UserData;
  @Input() depUserData2: UserData;
  @Input() depMPRUserData1: UserData;
  @Input() depMPRUserData2: UserData;
  @Input() reverseDirection: boolean;
  chartInfo: DoughnutInfo[] = new Array<DoughnutInfo>();
  chartsInfo: Array<DoughnutInfo[]> = new Array<DoughnutInfo[]>();
  average: number;
  constructor() {
  }

  prepareChartInfo(category: UserData){
    this.chartInfo = new Array<DoughnutInfo>();
    let numOfLabels = 0;
    category.data.forEach(elem =>{
      if(numOfLabels == 2)
        return;
      let total: number = 0;
      let counter: number = 0;
      let max: number = 0;
      let index: number = 0;
      let average;
      elem.value.forEach(value => {
        total+= value;
        counter++;
        if (value > max){
          max = value;
          index = counter;
        }
      });
      average = parseFloat((total/counter).toFixed(2));
      this.chartInfo.push(new DoughnutInfo(elem.label, total,average , category.names.at(index)!));
      numOfLabels++;
    });
    this.chartsInfo.push(this.chartInfo);
  };

  ngOnInit(): void {
    if (this.reverseDirection){
      const element = document.getElementById('cards-cont') as HTMLElement;
      element.style.flexDirection = 'row-reverse';
    }
    this.prepareChartInfo(this.depUserData1);
    this.prepareChartInfo(this.depUserData2);
    this.prepareChartInfo(this.depMPRUserData1);
    this.prepareChartInfo(this.depMPRUserData2);

  }
}
