import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ChartData} from "../model/ChartData.interface";
import {PrepareBarChartData} from "./PrepareBarChartData";


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, AfterViewInit {
  @Input() chartData: ChartData;
  prepareBarChartData: PrepareBarChartData;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.prepareBarChartData.prepareDataSets();
    this.prepareBarChartData.createCharts();
  }

  ngOnInit(): void {
    this.prepareBarChartData = new PrepareBarChartData(this.chartData);
  }

}

