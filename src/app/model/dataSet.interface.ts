import {barChartAxisData} from "./barChartAxisData.interface";

export class DataSet {
  constructor(label: string, data: Array<barChartAxisData>) {
    this.label = label;
    this.data = data;
  }
  label: string;
  data: Array<barChartAxisData>;
  backgroundColor: string;
  hoverBackgroundColor: string;
  barThickness: number;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  borderSkipped: boolean;
  yAxisID: string;
  xAxisID: string;

};
