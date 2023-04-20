import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit{
  public  chart: any;
  createChart(){
    this.chart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['1','2', '3','4', '5', '6'],
        datasets: [
          {
            data: [200, 300, 150, 220, 120, 220],
            borderColor: 'limegreen',
            pointStyle: false
          }
        ]
      },
      options: {
        aspectRatio:1.3,
        responsive: true,
        layout: {autoPadding: true},
        scales: {
          x : {grid: {display: true, color: 'darkgrey'}, border: {dash: [15], display: false}, ticks: {display: false}},
          y : {grid: {display: false}, display: false},
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
