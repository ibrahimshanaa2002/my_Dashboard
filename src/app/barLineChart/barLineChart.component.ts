import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-barLineChart',
  templateUrl: './barLineChart.component.html',
  styleUrls: ['./barLineChart.component.css']
})
export class BarLineChartComponent implements  OnInit{
  protected chart: any;
  protected chart_ID: string = 'barLineChart';

  createChart(){
    this.chart = new Chart(this.chart_ID, {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov','Dec'],
        datasets: [
          {
            label: "Earnings",
            data: ['467','576', '572', '79', '92', '574', '573', '576', '92', '574', '573', '576'],
            backgroundColor: 'black',
            pointStyle: false,
            tension: 0.4

          }]
      },
      options: {
        aspectRatio:1.5,
        responsive: true,
        layout: {autoPadding: true},
        scales: {
          x : {grid: {display: false}, display: false},
          y : {grid: {display: false}, display: false },
        },
        plugins:{
          legend: {display: false},


        }
    }});
}

  ngOnInit(): void {
    this.createChart();
  }
  }
