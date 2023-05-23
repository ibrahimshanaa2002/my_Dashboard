import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {ChartData} from "../model/ChartData.interface";
import {DoughnutInfo} from "../model/doughnutInfo.interface";
import {PrepareCardData} from "./PrepareCardData";


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit{
  @Input() chartData: ChartData;
  @Input() depDataChart1: ChartData;
  @Input() depDataChart2: ChartData;
  @Input() depDataChart3: ChartData;
  @Input() depDataChart4: ChartData;
  prepareCardData: PrepareCardData;
  constructor() {
  }
  ngOnInit(): void {
    this.prepareCardData = new PrepareCardData();
    this.prepareCardData.prepareMdCardInfo(this.depDataChart1);
    this.prepareCardData.prepareMdCardInfo(this.depDataChart2);
    this.prepareCardData.prepareMdCardInfo(this.depDataChart3);
    this.prepareCardData.prepareMdCardInfo(this.depDataChart4);
  }
}
