import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Chart} from "chart.js";
import {UserData} from "../model/userData.interface";
import {Data} from "../model/data.interface";



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
  ipOnAccountDataSet: Array<Data>;
  ipOnAppDataSet: Array<Data>;
  appSecuredDataSet: Array<Data>;
  executedAppDataSet: Array<Data>;
  usersData: Array<UserData>;
  start: number = 0;
  end: number = 10;
  @Input() userData: Array<UserData>;
  @Input() MPRUserData: Array<UserData>;

  constructor() {
  }

  prepareData() {
    this.ipOnAccountDataSet = new Array<Data>();
    this.ipOnAppDataSet = new Array<Data>();
    this.appSecuredDataSet = new Array<Data>();
    this.executedAppDataSet = new Array<Data>();
      this.userData.forEach(data => {
        if (data.IPonAccountSecured !=0 || data.IPonAppSecured !=0 || data.AppSecured !=0 || data.ExecutedAPPPayments !=0){
        this.ipOnAccountDataSet.push(new Data(data.name, data.IPonAccountSecured));
        this.ipOnAppDataSet.push(new Data(data.name, data.IPonAppSecured));
        this.appSecuredDataSet.push(new Data(data.name, data.AppSecured));
        this.executedAppDataSet.push(new Data(data.name, data.ExecutedAPPPayments));
        }
      });
  }

  nextGroup() {
    if (this.userData.length <= (this.end + 10)){
      this.start = this.userData.length - 10;
      this.end = this.userData.length;
      this.chart.destroy();
      this.createChart(this.start, this.end);
    }else {
    this.start+=10;
    this.end+=10;
    this.chart.destroy();
    this.createChart(this.start, this.end);
    }
  }

  prevGroup() {
    if ((this.start - 10) <= 0){
      this.start = 0;
      this.end = 10;
      this.chart.destroy();
      this.createChart(this.start, this.end);
    }else {
      this.start-=10;
      this.end-=10;
      this.chart.destroy();
      this.createChart(this.start, this.end);
    }
  }

  ngOnInit(): void {
    this.prepareData();
    this.createChart(this.start, this.end);
  }


  createChart(start: number, end: number) {
    this.chart = new Chart(this.chart_ID, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: "IP on Account Secured ($)",
            data: this.ipOnAccountDataSet.slice(start, end),
            backgroundColor: 'limegreen',
            hoverBackgroundColor: 'darkgreen',
            barThickness: 13,
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 20,
            borderSkipped: false,
          },
          {
            label: "IP on APP Secured ($)",
            data: this.ipOnAppDataSet.slice(start, end),
            backgroundColor: 'blue',
            hoverBackgroundColor: 'darkblue',
            barThickness: 13,
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 20,
            borderSkipped: false,
          },
          {
            label: "APP Secured ($)",
            data: this.appSecuredDataSet.slice(start, end),
            backgroundColor: 'orange',
            hoverBackgroundColor: 'darkorange',
            barThickness: 13,
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 20,
            borderSkipped: false,
          },
          {
            label: "Executed App Payments ($)",
            data: this.executedAppDataSet.slice(start, end),
            backgroundColor: 'red',
            hoverBackgroundColor: 'darkred',
            barThickness: 13,
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 20,
            borderSkipped: false,
          }
        ]
      },
      options: {
        aspectRatio: 2,
        // maintainAspectRatio: false,
        responsive: true,
        layout: {autoPadding: true},
        scales: {
          x: {grid: {display: false}},
          y: {grid: {display: false}},
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

