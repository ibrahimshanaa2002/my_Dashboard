export class Data {
  constructor(label: string, value: number[], color: string, stackGroup: string) {
    this.label = label;
    this.value = value;
    this.color = color;
    this.stackGroup = stackGroup;
  }
  label: string;
  value: number[];
  color: string;
  stackGroup: string;
}


