import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {UserData} from "../model/userData.interface";
import {Data} from "../model/data.interface";
import {BarDataSets} from "../model/barDataSets.interface";
import {UUID} from "uuid-generator-ts";




@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements  AfterViewInit {

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
  dataSets: BarDataSets[] = new Array<BarDataSets>();
  pageArr: Map<number, BarDataSets[]> = new Map<number, BarDataSets[]>();
  chart_ID: string = new UUID().toString();
  page: number = 1;
  start: number = 0;
  end: number= 10;

  @Input() userData: UserData;
  @Input() MPRUserData: UserData;

  constructor() {

  }

  prepareDataSets(category: UserData) {
    this.pageArr = new Map<number, BarDataSets[]>();
    this.dataSets = new Array<BarDataSets>();
    category.data.forEach(element =>{
      this.dataSets.push(new BarDataSets(element.label, element.value.slice(this.start,this.end)));
    });
    this.pageArr.set(this.page, this.dataSets);
  }

  nextGroup(category: UserData) {
    this.start+=10;
    this.end+=10;
    this.page++;
    let size = category.data.at(0)!.value.length;
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
      if(!this.pageArr.has(this.page)){
        this.dataSets = new Array<BarDataSets>();
        category.data.forEach(element =>{
          this.dataSets.push(new BarDataSets(element.label, element.value.slice(this.start,this.end)));
        });
        this.pageArr.set(this.page, this.dataSets);
        this.chart.destroy();
        this.createChart(this.chart_ID, this.start, this.end, this.page);
      }
      else{
        this.chart.destroy();
        this.createChart(this.chart_ID, this.start, this.end, this.page);
      }
    }
    else{
    if(!this.pageArr.has(this.page)){
    this.dataSets = new Array<BarDataSets>();
      category.data.forEach(element =>{
      this.dataSets.push(new BarDataSets(element.label, element.value.slice(this.start,this.end)));
    });
    this.pageArr.set(this.page, this.dataSets);
      this.chart.destroy();
      this.createChart(this.chart_ID, this.start, this.end, this.page);
    }
    else{
      this.chart.destroy();
      this.createChart(this.chart_ID, this.start, this.end, this.page);
    }
    }
  }

  prevGroup() {
    this.start-=10;
    this.end-=10;
    if(this.page == 1){
      return;
    }
    if(this.start < 0){
      this.start = 0;
      this.end = 10;
      this.page = 1;
      this.chart.destroy();
      this.createChart(this.chart_ID, this.start, this.end, this.page);
      return;
    }
      this.page--;
      this.chart.destroy();
      this.createChart(this.chart_ID, this.start, this.end, this.page);

  }

  ngAfterViewInit(): void {
    this.prepareDataSets(this.userData);
    this.prepareDataSets(this.MPRUserData);
    this.createChart(this.chart_ID, this.start, this.end, this.page);
  }


  createChart(ID:string, start: number, end: number,page: number) {
    this.chart = new Chart(ID, {
      type: 'bar',
      data: {
        labels: this.userData.names.slice(start,end),
        datasets: this.pageArr.get(page)!
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

