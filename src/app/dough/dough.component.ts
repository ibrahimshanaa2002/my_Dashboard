import {AfterViewChecked, AfterViewInit, Component, Input} from '@angular/core';
import {Chart, ChartMeta} from "chart.js";
import {bottom, right} from "@popperjs/core";
import {UserData} from "../model/userData.interface";
import {DoughnutDataSets} from "../model/doughnutDataSets.interface";
import {UUID} from "uuid-generator-ts";

@Component({
  selector: 'app-dough',
  templateUrl: './dough.component.html',
  styleUrls: ['./dough.component.css']
})
export class DoughComponent  implements  AfterViewInit{
  protected chart: any;
  @Input() depUserData: UserData;
  @Input() depMPRUserData: UserData;
  dataSets: DoughnutDataSets[] = new Array<DoughnutDataSets>();
  chart_ID: string = new UUID().toString();
  constructor() {
  }

  prepareData(){
    let counter = 0;
    this.depUserData.data.forEach(element =>{
      counter++;
      this.dataSets.push(new DoughnutDataSets(element.label, element.value));
      if (counter == 2){
        return;
      }
    });
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


  createChart(id: string){
    this.chart = new Chart(id, {
      type: 'doughnut',
      data: {
        labels: this.depUserData.names,
        datasets: this.dataSets
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

  ngAfterViewInit(): void {
    this.prepareData();
    this.createChart(this.chart_ID);
  }

}
