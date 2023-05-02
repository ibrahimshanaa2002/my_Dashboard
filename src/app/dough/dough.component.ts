import {Component, OnInit} from '@angular/core';
import {Chart, ChartMeta, elements} from "chart.js";
import {bottom, right} from "@popperjs/core";

@Component({
  selector: 'app-dough',
  templateUrl: './dough.component.html',
  styleUrls: ['./dough.component.css']
})
export class DoughComponent  implements  OnInit{
  protected chart: any;
  protected chart_ID: string = 'doughnut-chart';

   doughnutText = {
    id: 'doughnutText',
    afterDatasetDraw(chart: Chart, args: { index: number; meta: ChartMeta },pluginOptions: any) {
      const {ctx, data, options, chartArea: { top, bottom, left, right, width, height}} = chart;

      ctx.save();
      {ctx.font = 'bold 1em sans-serif';
      ctx.fillText('54%', 38, 50);}
      ctx.fillStyle= 'black';
      {ctx.font = '1em sans-serif';
        ctx.fillText('App', 37, 70);}
    }
  }


  createChart(){
    this.chart = new Chart(this.chart_ID, {
      type: 'doughnut',
      data: {
        // labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            data: [54, 44, 22,25,32,12,36,54,92,54],
            // backgroundColor: ['limegreen', 'lightgreen', 'lightgrey'],
            hoverBackgroundColor: ['darkgreen', 'green', 'darkgrey'],
            // borderWidth: 0,
            // spacing: 2
          },
          {
            data: [54, 44, 22,12,54,65,32,52,36,54,25],
            // backgroundColor: ['yellow', 'orange', 'red'],
            hoverBackgroundColor: ['darkgreen', 'green', 'darkgrey'],
            // borderWidth: 0,
            // spacing: 2
          }
        ]
      },
      options: {
        // cutout: 35,
        aspectRatio:1,
        responsive: true,
        layout: {autoPadding: true},
        plugins: {
          legend:{
            display: false
          },
          tooltip: {
            displayColors: false,
          }
        },

      },
      plugins: [this.doughnutText]
    });

  }

  ngOnInit(): void {
    this.createChart();
  }

}
