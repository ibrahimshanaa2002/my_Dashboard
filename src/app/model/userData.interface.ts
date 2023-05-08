import {Data} from "./data.interface";
import {barChartAxisData} from "./barChartAxisData.interface";

export interface UserData {
  // key: string;
  // data: Map<string, number>;

  // data [ipOnAccount ->json  Array[ x, y] ]
  // map [x, map [label, y]

  //

  data: Map<string, barChartAxisData[]>;
}
