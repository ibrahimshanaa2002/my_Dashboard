import {Data} from "./data.interface";

export interface ChartData {
  title: string;
  names: string[];
  data: Data[];
  seperateChartLabel: Set<string>;
}
