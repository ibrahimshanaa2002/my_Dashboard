import {AfterViewChecked, Component, Input} from '@angular/core';
import {Chart, ChartMeta} from "chart.js";
import {bottom, right} from "@popperjs/core";
import {UserData} from "../model/userData.interface";
import {DoughnutDataSets} from "../model/doughnutDataSets.interface";

@Component({
  selector: 'app-dough',
  templateUrl: './dough.component.html',
  styleUrls: ['./dough.component.css']
})
export class DoughComponent  implements  AfterViewChecked{
  protected chart: any;
  @Input() chart_ID: string = "";
  @Input() userData: UserData;
  dataSets: DoughnutDataSets[] = new Array<DoughnutDataSets>();
  constructor() {

  }

  prepareData(){
    this.userData.data.forEach(element =>{
      this.dataSets.push(new DoughnutDataSets(element.label, element.value));
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


  createChart(){
    this.chart = new Chart(this.chart_ID, {
      type: 'doughnut',
      data: {
        labels: this.userData.names,
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

  // ngOnInit(): void {
  //    this.prepareData();
  //    this.createChart();
  // }

  ngAfterViewChecked(): void {
    this.prepareData();
    this.createChart();
  }

}
