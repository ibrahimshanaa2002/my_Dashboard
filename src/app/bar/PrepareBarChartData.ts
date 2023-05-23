import {ChartData} from "../model/ChartData.interface";
import {BarDataSets} from "../model/barDataSets.interface";
import {UUIDUtility} from "../shared-utility/UUIDUtility";
import {Chart, Legend} from "chart.js";

export class PrepareBarChartData {
  chart1: any;
  chart2: any;
  private chartData: ChartData;
  private dataSets1: BarDataSets[] = new Array<BarDataSets>();
  private dataSets2: BarDataSets[] = new Array<BarDataSets>();
  private pageArr: Map<number, [BarDataSets[], BarDataSets[]]> = new Map<number, [BarDataSets[], BarDataSets[]]>();
  private page: number = 1;
  private start: number = 0;
  private end: number= 10;
  private FIRST_CHART_DATASETS : number = 0;
  private SECOND_CHART_DATASETS : number = 1;
  chart_ID1: string = UUIDUtility.generateUUID();
  chart_ID2: string = UUIDUtility.generateUUID();

  constructor(chartData: ChartData) {
    this.chartData = chartData;
  }

  //This method prepare the datasets needed to create the charts
  prepareDataSets() {
    this.chartData.data.forEach(element =>{
      if(this.chartData.seperateChartLabel.has(element.label))
        this.prepareDataGroup(this.dataSets2, element.label, element.value, element.color, element.stackGroup);
      else
        this.prepareDataGroup(this.dataSets1, element.label, element.value, element.color, element.stackGroup);
    });
    this.pageArr.set(this.page, [this.dataSets1, this.dataSets2]);
  }

  /**
   *  This method prepare single dataset, where it assigns various characteristics to each dataset, its main goal to
   *   arrange the datasets in stack groups, so each group will have their specific datasets
   */
  private prepareDataGroup(dataSets: Array<BarDataSets>, label: string, values:number[], color: string, stackGroup: string) {
    dataSets.push(new BarDataSets(label, values.slice(this.start,this.end), color, stackGroup ));
  }

  //This method build the pages of the datasets in groups of 10s, as the next button click is triggered
  nextGroup() {
    this.start+=10;
    this.end+=10;
    this.page++;
    let size = this.chartData.data.at(0)!.value.length;
    let numOfPages = Math.ceil(size/10);
    if(this.page > numOfPages){
      this.start-=10;
      this.end-= 10;
      this.page--;
      return;
    }
    else if(this.page == numOfPages) {
      this.start = size -10;
      this.end = size;
    }
    this.orderDatasetsPages(true);
  }

  //This method return to the previous page
  prevGroup() {
    if(this.page == 1)
      return;
    this.start-=10;
    this.end-=10;
    if(this.start < 0){
      this.start = 0;
      this.end = 10;
      this.page = 1;
    } else {
      this.page--;
    }
    this.orderDatasetsPages(false);
  }

  /**
   *  This method build the pages of the datasets if not existed, then destroy and create the new page, everytime
   *   nextGroup() method is triggered. If prevGroup() method is triggered only destroy the old page and get the previous page
   */
  private orderDatasetsPages(isNextGroup: boolean){
    if(isNextGroup && !this.pageArr.has(this.page)){
      this.dataSets1 = new Array<BarDataSets>();
      this.dataSets2 = new Array<BarDataSets>();
      this.prepareDataSets();
    }
    this.destroyCharts();
    this.createCharts();
  }

  //This method create the charts
  createCharts(){
    this.chart1 = this.createChart(this.chart_ID1, this.start, this.end, this.page, false, "left", true, this.FIRST_CHART_DATASETS);
    this.chart2 = this.createChart(this.chart_ID2, this.start, this.end, this.page, true, "right", false, this.SECOND_CHART_DATASETS);
  }

  //This method destroy the charts
  private destroyCharts(){
    this.chart1.destroy();
    this.chart2.destroy();
  }

  //This method is to configure the chart, and it returns a Chart
  private createChart(ID:string, start: number, end: number,page: number, reverse: boolean,
              position:"right" | "left" | "top" | "bottom" | "center",
              displayAxis: boolean, chartNumber: number) : Chart {
    let legendPos: any;
    if (position == "right")
      legendPos = "left"
    else legendPos = "right"
    let chart = new Chart(ID, {
      type: 'bar',
      data: {
        labels: this.chartData.names.slice(start,end),
        datasets: this.pageArr.get(page)![chartNumber]
      },
      options: {
        // aspectRatio: 2.1,
        indexAxis: "y",
        maintainAspectRatio: false,
        responsive: true,
        layout: {autoPadding: true},
        scales: {
          x: {grid: {display: false}, reverse: reverse},
          y: {grid: {display: false}, position: position, display: displayAxis} ,
          // negativeAxis: {grid: {display: false}, position: 'top'},
        },
        plugins: {
          legend: {
            position: legendPos,
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              font: {size: 13}
            },
            align: 'start',
          },
          tooltip: {
            displayColors: false,
          }
        },
      },
      // plugins: [this.legendMargin]
    });
    return chart;
  }

  //This method is a plugin to createChart() method only to specify margin if needed between the chart and the labels
  private legendMargin: any = {
    id: 'legendMargin',
    beforeInit(chart: any, legend: any, options: any) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return this.height = 35;
      }
    }
  };
}
