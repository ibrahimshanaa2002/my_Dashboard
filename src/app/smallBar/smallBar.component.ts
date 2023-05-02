import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";


@Component({
  selector: 'app-smallBar',
  templateUrl: './smallBar.component.html',
  styleUrls: ['./smallBar.component.css']
})
export class SmallBarComponent implements OnInit{
  protected chart: any;
  protected chart_ID: string = 'smallBar-chart';
  createChart(){
    this.chart = new Chart(this.chart_ID, {
      type: 'bar',
      data: {
        labels: ['1','2', '3','4', '5', '6'],
        datasets: [
          {
            data: [400, 300, 200, 20,  10 , 5],
            backgroundColor: ['green', 'green', 'green', 'red', 'red', 'red'],
            hoverBackgroundColor: 'darkred',
            barThickness: 10,
          },
          {
            data: [400, 400, 400, 400, 400, 400],
            backgroundColor: 'lightgrey',
            barThickness: 10,
          }
        ]
      },
      options: {
        aspectRatio:1.3,
        maintainAspectRatio: true,
        responsive: true,
        layout: {autoPadding: true},
        scales: {
          x : {grid: {display: false}, display: false, stacked: true },
          y : {grid: {display: false}, display: false, stacked: true, max: 400},
        },
        plugins: {
          legend:{
            display: false
          },
          tooltip: {
            enabled: false
          }

        },
      }

    });

  }

  ngOnInit(): void {
    this.createChart();
  }
}
