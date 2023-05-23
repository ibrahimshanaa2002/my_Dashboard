import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Chart, ChartMeta} from "chart.js";
import {ChartData} from "../model/ChartData.interface";
import {DoughnutDataSets} from "../model/doughnutDataSets.interface";
import {UUID} from "uuid-generator-ts";
import {PrepareDoughChartData} from "./PrepareDoughChartData";

@Component({
  selector: 'app-dough',
  templateUrl: './dough.component.html',
  styleUrls: ['./dough.component.css']
})
export class DoughComponent  implements  AfterViewInit, OnInit{
  @Input() depDataChart: ChartData;
  prepareDoughChartData: PrepareDoughChartData;

  constructor() {
  }

  ngOnInit(): void {
    this.prepareDoughChartData = new PrepareDoughChartData(this.depDataChart);
    }

  ngAfterViewInit(): void {
    this.prepareDoughChartData.prepareData();
    this.prepareDoughChartData.createChart();
  }

}
