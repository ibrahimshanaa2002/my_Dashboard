import {Component, Input, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {UserData} from "../model/userData.interface";
import {Data} from "../model/data.interface";
import {DataSet} from "../model/dataSet.interface";




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
  dataSets: DataSet[] = new Array<DataSet>();
  initialDatasets: DataSet[] =new Array<DataSet>();
  XaxisData: string[] = new Array<string>();
  start: number = 0;
  end: number= 10;

  @Input() userData: UserData;
  @Input() MPRUserData: Array<UserData>;

  constructor() {

  }

  prepareDataSets() {
    let x: Data[] = this.userData.data.values().next().value;
      x.forEach(coloumn => {
        let arr = new Array<number>();
        this.dataSets.push(new DataSet(coloumn.label, arr));
      });
      this.userData.data.forEach((value, key) => {
        this.XaxisData.push(key);
        value.forEach(colomn => {
          this.dataSets.forEach(dataset => {
            if(dataset.label === colomn.label) {
              dataset.data.push(colomn.value);
            }
          });
        });
      });
    this.dataSets.forEach(dataset => {
      this.initialDatasets.push(new DataSet(dataset.label, dataset.data.slice(this.start, this.end)));
    });
  }

  nextGroup() {
    let nextDataSets: DataSet[] =new Array<DataSet>();
      this.start += 10;
      this.end += 10;
      this.dataSets.forEach(dataset => {
        if(this.end > dataset.data.length)
          nextDataSets.push(new DataSet(dataset.label, dataset.data.slice(dataset.data.length -10, dataset.data.length)));
        else
        nextDataSets.push(new DataSet(dataset.label, dataset.data.slice(this.start, this.end)));
      });
      this.chart.destroy();
      this.createChart(nextDataSets);
  }

  prevGroup() {
    let prevDataSets: DataSet[] =new Array<DataSet>();
    if(this.start-10 <= 0){
      this.start = 0;
      this.end = 10;
      this.chart.destroy();
      this.createChart(this.initialDatasets);
    }
    else {
      this.start-=10;
      this.end-=10;
      console.log(this.start)
      this.dataSets.forEach(dataset => {
        prevDataSets.push(new DataSet(dataset.label, dataset.data.slice(this.start, this.end)));
      });
      this.chart.destroy();
      this.createChart(prevDataSets);
    }
  }

  ngOnInit(): void {
    this.prepareDataSets();
    this.createChart(this.initialDatasets);
  }


  createChart(dataSets: DataSet[]) {
    this.chart = new Chart(this.chart_ID, {
      type: 'bar',
      data: {
        labels: this.XaxisData.slice(),
        datasets: dataSets
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

