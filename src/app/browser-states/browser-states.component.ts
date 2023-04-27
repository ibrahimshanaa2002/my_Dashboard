import {Component, OnInit, Input} from '@angular/core';
import {Chart, ChartMeta, elements} from "chart.js";
import { browserStatesList } from "../model/browser-states";

@Component({
  selector: 'app-browser-states',
  templateUrl: './browser-states.component.html',
  styleUrls: ['./browser-states.component.css']
})
export class BrowserStatesComponent implements OnInit{
  browserStatesList = browserStatesList;

  public newChart: any;
  createChart(id:number, perecnt:number){
    this.newChart = new Chart(`DoughChart${id}`, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [perecnt, 100 - perecnt],
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

    // return this.newChart;
  }

  ngOnInit(): void {
    // this.createChart(id, number);
  }
}

