import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Chart} from "chart.js";
import {UserData} from "../model/userData.interface";
import {Data} from "../model/data.interface";
import {DataSet} from "../model/dataSet.interface";
import {barChartAxisData} from "../model/barChartAxisData.interface";



@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements  OnInit {

  private legendMargin: any = {
    id: 'legendMargin',
    beforeInit(chart: any, legend: any, options: any) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return this.height += 35;
      }
    }
  };
  protected chart: any;
  protected chart_ID: string = 'bar-chart';
  data: Array<Data>;
  barChartAxisData: Map<number, DataSet[]> = new Map<number, DataSet[]>();
  datas: DataSet[] = new Array<DataSet>();
  page: number = 1;
  @Input() userData: UserData;
  @Input() MPRUserData: Array<UserData>;

  constructor() {

  }

  prepareDataSets() {
      this.userData.data.forEach( (value, key) => {
        this.datas.push(new DataSet(key, value));
        let size = Math.ceil(value.length/10);
        let start = 0;
        let end = 10;
        for (let i = 1; i <= size; i++) {
          if(i == size){
            start = value.length-10;
            end = value.length;
          }
          let dataset = new DataSet(key, value.slice(start,end));
          if( this.barChartAxisData.has(i)){
            this.barChartAxisData.get(i)!.push(dataset);
          } else{
            let array = new Array<DataSet>();
            array.push(dataset);
            // if (i > 1){
            // dataset = this.barChartAxisData.get(i-1)!.at(0)!;
            // array.push(dataset);
            // }
            this.barChartAxisData.set(i,array);
          }
            start+=10;
            end+=10;
        }
        });
  }

  nextGroup() {
    if(this.page === this.barChartAxisData.size)
      return;
    this.page++;
    if(this.barChartAxisData.get(this.page) === undefined){
      this.page--;
      return;
    }
    this.chart.destroy();
    this.createChart(this.page);
  }

  prevGroup() {
    if(this.page === 1)
        return;
    this.page--;
    if(this.barChartAxisData.get(this.page) === undefined){
      this.page++;
      return;
    }
    this.chart.destroy();
    this.createChart(this.page);
  }

  ngOnInit(): void {
    this.prepareDataSets();
    console.log(this.datas);
    this.createChart(this.page);
  }


  createChart(page: number) {
    this.chart = new Chart(this.chart_ID, {
      type: 'bar',
      data: {
        labels: ,
        datasets: this.datas
      },
      options: {
        aspectRatio: 2,
        // maintainAspectRatio: false,
        responsive: true,
        layout: {autoPadding: true},
        scales: {
          x: {grid: {display: false}},
          y: {grid: {display: false}},
          y1: {grid: {display: false}, position: 'right'},
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              font: {size: 13}
            },
            align: 'end',
          },
          tooltip: {
            displayColors: false,
          }
        },
      },
      plugins: [this.legendMargin]
    });
  }
}

