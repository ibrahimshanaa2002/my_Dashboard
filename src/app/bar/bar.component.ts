import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {DataSet} from "../model/dataSet.interface";



@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements  OnInit{
  protected chart: any;
  protected chart_ID: string = 'bar-chart';
  dataSet: DataSet;
  dataSet1: DataSet;

 legendMargin: any ={
      id: 'legendMargin',
      beforeInit(chart: any, legend: any, options: any){
        const fitValue = chart.legend.fit;
        chart.legend.fit = function fit() {
          fitValue.bind(chart.legend)();
          return this.height +=35;
        }
      }
  };


  createChart(){
    this.chart = new Chart(this.chart_ID, {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov','Dec'],
        datasets: [
          {
            label: "Earnings",
            data: ['542', '542', '536', '327', '17', '538', '541', '467','576', '572', '326', '194'],
            backgroundColor: 'limegreen',
            hoverBackgroundColor: 'darkgreen',
            barThickness: 13,
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 20,
            borderSkipped: false

          },
          {
            label: "Expenses",
            data: ['-542', '-542', '-536', '-327', '-17', '-538', '-541', '-467','-576', '-572', '-326', '-194'],
            backgroundColor: 'red',
            hoverBackgroundColor: 'darkred',
            barThickness: 13,
            borderColor: 'white',
            borderWidth: 3,
            borderRadius: 20,
            borderSkipped: false
          }
        ]
      },
      options: {
        aspectRatio:1.15,
        // maintainAspectRatio: false,
        responsive: true,
        layout: {autoPadding: true},
        scales: {
          x : {grid: {display: false}, stacked: true },
          y : {grid: {display: false}, stacked: true },
        },
        plugins: {
          legend:{
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              font: { size: 13}
            },
            align: 'end',
          },
          // title: {
          //   font: {size: 22},
          //   display: true,
          //   text: 'Revenue and Expenses',
          //   position: 'top',
          //   align: 'start',
          //   padding: {bottom: -29},
          //   color: '#000',
          // },
          tooltip: {
            displayColors: false,
          }
        },
      },
      plugins: [this.legendMargin]
    });

  }

  ngOnInit(): void {
    this.createChart();
  }
}
