import {Component, OnInit, Input} from '@angular/core';
import {BubbleDataPoint, Chart, ChartMeta, ChartTypeRegistry, elements, Point} from "chart.js";
import { browserStatesList } from "../model/browser-states";
import {patientOutreached} from "../model/patients-outreached";
import {UUID} from "uuid-generator-ts";
import {UUIDUtility} from "../shared-utility/UUIDUtility";
@Component({
  selector: 'app-browser-states',
  templateUrl: './browser-states.component.html',
  styleUrls: ['./browser-states.component.css']
})
export class BrowserStatesComponent implements OnInit{
  patientOutreachedList= patientOutreached[0];
  chart_ID: string[] = new Array();

  ngOnInit(): void {
    this.patientOutreachedList.Patient_section.forEach(patient=>{this.chart_ID.push(UUIDUtility.generateUUID());});
  }
  
  patientOutreachedValue() {
    let total= 0;
    for (let i = 0; i < this.patientOutreachedList.Patient_section.length-1; i++) {
      let temp= this.patientOutreachedList.Patient_section[i].value;
      if (temp > total)
        total=  temp;
    }
    return total;
  }

  createChart(id:number, perecnt:number) : any {
    let newChart = new Chart(this.chart_ID[id], {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [perecnt, this.patientOutreachedValue() - perecnt],
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

}

