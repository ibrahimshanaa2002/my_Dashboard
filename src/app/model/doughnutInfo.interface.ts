export class DoughnutInfo{
  constructor(label: string, value: number, average: number, topDep: string) {
    this.label = label;
    this.value = value;
    this.average = average;
    this.topDep = topDep;
  }
  label: string;
  value: number;
  average: number;
  topDep: string;
}
