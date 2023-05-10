import {Data} from "./data.interface";

export interface UserData {
  data: Map<string, Data[]>; // the key is the name in the Xaxis
}                            // Data {label: coloumn, value: value}
