import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {Chart, ChartMeta, elements} from "chart.js";
import {bottom, right} from "@popperjs/core";
import {UUID} from "uuid-generator-ts";

@Component({
  selector: 'app-dough',
  templateUrl: './dough.component.html',
  styleUrls: ['./dough.component.css']
})
export class DoughComponent  implements  AfterViewChecked{
  protected chart: any;
  @Input() chart_ID: string = "";
  constructor() {
  console.log(this.chart);
  }

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
        labels: ['Feb', 'Jan', 'Mar'],
        datasets: [
          {
            label: "dfdf",
            data: [{date: "Jan", data:10}, {date: "Feb", data:20}, {date: "Mar", data: 30}],
            // backgroundColor: ['limegreen', 'lightgreen', 'lightgrey'],
            hoverBackgroundColor: ['darkgreen', 'green', 'darkgrey'],
            // borderWidth: 0,
            // spacing: 2
          },
          // {
          // label: "dfdf",
          //   data: [54, 44, 22,12,54,65,32,52,36,54,25],
          //   // backgroundColor: ['yellow', 'orange', 'red'],
          //   hoverBackgroundColor: ['darkgreen', 'green', 'darkgrey'],
          //   // borderWidth: 0,
          //   // spacing: 2
          // }
        ]
      },
      options: {
        parsing: { key: 'data' },
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
      // plugins: [this.doughnutText]
    });

  }

  // ngOnInit(): void {
  //    console.log(this.chart_ID);
  //    this.createChart();
  // }

  ngAfterViewChecked(): void {
    this.createChart();
  }

}
