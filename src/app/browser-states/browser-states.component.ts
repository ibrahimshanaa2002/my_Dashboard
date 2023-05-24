import {Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import {Chart} from "chart.js";
import {patientOutreachedList} from "../model/patients-outreached";
import {UUIDUtility} from "../shared-utility/UUIDUtility";
@Component({
  selector: 'app-browser-states',
  templateUrl: './browser-states.component.html',
  styleUrls: ['./browser-states.component.css']
})
export class BrowserStatesComponent implements OnInit, AfterViewInit {
  componentName= "Patient Outreached";
  patientOutreachedList= patientOutreachedList;
   @ViewChildren('chartCanvas') chartCanvases: QueryList<ElementRef>;
   ngAfterViewInit() {
    this.chartCanvases.forEach((canvas, i) => {
      const chartId = this.chart_ID[i];
      const chartData = this.patientOutreachedList[i].value;
      this.createChart(canvas.nativeElement, chartId, chartData);
  });
  }
  createChart(canvas: HTMLCanvasElement, chartId: string, chartData: any) {
    let newChart = new Chart(chartId, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [chartData, this.patientOutreachedTotalValue() - chartData],
            backgroundColor: ['#3182f0','#eeecf3'],
            borderWidth: 0,
          }
        ]
      },

      options: {
        cutout: 20,
        aspectRatio:1,
        responsive: true,
        layout: {
          autoPadding: true
        },
        plugins: {
          legend:{
            display: false
          },
          tooltip: {
            enabled: false,
            displayColors: false,
            filter: tooltipItem => tooltipItem.dataIndex == 0,
          },
        },

      },
    });
   return newChart;
  }
  chart_ID: string[] = new Array();

  ngOnInit(): void {
    this.patientOutreachedList.forEach(patient=>{this.chart_ID.push(UUIDUtility.generateUUID());});
  }

  patientOutreachedTotalValue() {
    let total= 0;
    for (let i = 0; i < this.patientOutreachedList.length-1; i++) {
      let temp= this.patientOutreachedList[i].value;
      if (temp > total)
        total=  temp;
    }
    return total;
  }

}

