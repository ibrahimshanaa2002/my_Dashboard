import {DoughnutDataSets} from "../model/doughnutDataSets.interface";
import {ChartData} from "../model/ChartData.interface";
import {UUIDUtility} from "../shared-utility/UUIDUtility";
import {Chart, ChartMeta} from "chart.js";

export class PrepareDoughChartData {
  chart: any;
  private depData: ChartData;
  private dataSets: DoughnutDataSets[] = new Array<DoughnutDataSets>();
  chart_ID: string = UUIDUtility.generateUUID();

  constructor(depData: ChartData) {
    this.depData = depData;
  }

  //This method is to prepare the datasets of the chart
  prepareData(){
    let counter = 0;
    this.depData.data.forEach(element =>{
      counter++;
      this.dataSets.push(new DoughnutDataSets(element.label, element.value));
      if (counter == 2){
        return;
      }
    });
  }

  //This method is to configure the chart and create it
  createChart(){
    this.chart = new Chart(this.chart_ID, {
      type: 'doughnut',
      data: {
        labels: this.depData.names,
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

  //This method is a plugin to insert text inside the chart area
  private doughnutText = {
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
}
