import {Component, OnInit} from '@angular/core';
import {Chart, ChartMeta, elements} from "chart.js";

@Component({
  selector: 'app-goal-overview',
  templateUrl: './goal-overview.component.html',
  styleUrls: ['./goal-overview.component.css']
})
export class GoalOverviewComponent implements  OnInit{
  
  goalOverviewCompleted= 786617;
  goalOverviewInprogress= 13561;
  percent= 80;

  public chart: any;
   doughnutText = {
    id: 'doughnutText',
    percent:this.percent,
    afterDatasetDraw(chart: Chart, args: { index: number; meta: ChartMeta },pluginOptions: any) {
      const {ctx, data, options, chartArea: { top, bottom, left, right, width, height}} = chart;
      ctx.save();
      {ctx.font = 'bold 1.2em sans-serif';
       ctx.fillText(`${this.percent}%`, 40, 52);
      }
      ctx.fillStyle= 'black';
    }
  }
  createChart(){
    this.chart = new Chart("DoughChart-goalOverview", {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [this.percent,100 - this.percent],
            backgroundColor: ['#3182f0','#eeecf3'],
            hoverBackgroundColor: ['#5283ff','#eeecf3'],
            borderWidth: 0,
          }
        ]
      },
      
      options: {
        cutout: 43,
        aspectRatio:1,
        responsive: true,
        layout: {autoPadding: true},
        plugins: {
          legend:{
            display: false
          },
          tooltip: {
            enabled: false,
            displayColors: false,
            filter: tooltipItem => tooltipItem.dataIndex == 0,
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
