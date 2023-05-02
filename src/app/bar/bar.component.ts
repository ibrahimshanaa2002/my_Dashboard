import {Component, OnInit} from '@angular/core';
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
  userData: Array<UserData>;

  constructor() {
    this.prepareData();
  }

  prepareData() {
    this.userData = [{
      name: "xrdjdhs sthrdt",
      department: "dfddf",
      ipOnAccount: 34,
      ipOnApp: 34,
      appSecured: 34,
      appExecuted: 36
    },
      {
        name: "xrdjdhs sthrdtf",
        department: "fgjgasgbth",
        ipOnAccount: 34,
        ipOnApp: 34,
        appSecured: 34,
        appExecuted: 36
      },
      {name: "xrdjdhs sthrdtkj", department: "afgklkl", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36},
      {name: "xrdjdhs sthrdtdfh", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36},
      {name: "xrdjdhs sthrdtfg", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36},
      {name: "xrdjdhs sthrdtkik", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36},
      // {name:"f", department: "dfddf", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"d", department: "dfddf", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"s", department: "dfddf", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"a", department: "dfddf", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"o", department: "dfddf", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"i", department: "dfddf", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"u", department: "u", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"rtr", department: "y", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      // {name:"t", department: "dfddf", ipOnAccount:34,ipOnApp:34, appSecured:34, appExecuted:36},
      {name: "xrdjdhs sthrdtsdh", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36},
      {name: "xrdjdhs sthrdtqwr", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36}
      , {name: "e", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36},
      {name: "w", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36},
      {name: "q", department: "dfddf", ipOnAccount: 34, ipOnApp: 34, appSecured: 34, appExecuted: 36}]
    this.ipOnAccountDataSet = new Array<Data>();
    this.ipOnAppDataSet = new Array<Data>();
    this.appSecuredDataSet = new Array<Data>();
    this.executedAppDataSet = new Array<Data>();
    this.userData.forEach(data => {
      this.ipOnAccountDataSet.push(new Data(data.name, data.ipOnAccount));
      this.ipOnAppDataSet.push(new Data(data.name, data.ipOnApp));
      this.appSecuredDataSet.push(new Data(data.name, data.appSecured));
      this.executedAppDataSet.push(new Data(data.name, data.appExecuted));
    });
  }


  name: string = "asd";

  dgdfg() {
    this.name = "sdfsdf";
    this.chart.destroy();
    this.createChart();
  }

  ngOnInit(): void {
    this.createChart();
  }


  createChart() {
    this.chart = new Chart(this.chart_ID, {
      type: 'bar',
      data: {
        datasets: [
          {
            label: "IP on Account Secured ($)",
            data: this.ipOnAccountDataSet,
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
            data: this.ipOnAccountDataSet,
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
            data: this.ipOnAccountDataSet,
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
            data: this.ipOnAccountDataSet,
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

