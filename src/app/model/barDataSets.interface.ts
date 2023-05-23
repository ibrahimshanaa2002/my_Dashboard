import {ChartType} from "chart.js/dist/types";

export class BarDataSets {
  constructor(label: string, data: Array<number>, color: string, stackGroup:string) {
    this.label = label;
    this.data = data;
    this.backgroundColor = color;
    this.stack = stackGroup;
  }

  label: string;
  data: Array<number>;
  backgroundColor: string;
  hoverBackgroundColor: string;
  barThickness: number;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  borderSkipped: boolean;
  yAxisID: string;
  xAxisID: string;
  stack: string;

}
