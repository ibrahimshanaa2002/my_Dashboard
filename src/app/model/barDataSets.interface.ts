export class BarDataSets {
  constructor(label: string, data: Array<number>) {
    this.label = label;
    this.data = data;
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

};
