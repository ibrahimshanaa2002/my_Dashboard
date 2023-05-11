export class DoughnutDataSets {
  constructor(label: string, data: Array<number>) {
    this.label = label;
    this.data = data;
  }
  label: string;
  data: Array<number>;
  backgroundColor: string;
  hoverBackgroundColor: string;
  borderWidth: number;
  spacing: number;

};
