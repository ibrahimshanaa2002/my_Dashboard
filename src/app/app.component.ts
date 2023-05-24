import {Component, OnInit} from '@angular/core';
import {ChartData} from "./model/ChartData.interface";
import {barChartAxisData} from "./model/barChartAxisData.interface";
import {Data} from "./model/data.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'sprinters';
  chartData: ChartData;
  depDataChart1: ChartData;
  depDataChart2: ChartData;
  depDataChart3: ChartData;
  depDataChart4: ChartData;

  constructor() {
  }

  ngOnInit(): void {
    let names = ["Tori O'Guin", "Denise L Gross", "Theresa Parden", "Donna S Easter", "Krystal Allen", "Kimberly Keller", "Tyler Caldwell", "Brenda J Brandell", "Ella M Oliver", "Michelle Flanigan", "Pauline Biester", "Bonnie Baker", "Ais’Linn Dixon", "Cassidy Helton", "Heather Clubb", "Dakota Wadley", "Mycala Camden", "Chelsea Wicker", "Toni Holman", "Mike Mahurin", "Sandy L Hall", "Sherry A Lloyd", "Glenna J Moore", "Melissa Tinnin", "Cynthia K Bowers", "Tonya Manager POS Staff Perry", "Mikaela Hawkins", "Tammy Wolff", "Stephanie Scott", "Shelia M Stevens", "Tristina McMackin", "Katera Womack", "Chris Collins", "Danielle Hargrave", "April Lambert", "Patient Portal", "System"];
    let departments = ["Billing Office", "Cashier", "Emergency Room-6330", "Term-Financial Counselor", "Financial Counselor", "Term-HSS Selfpay", "HSS Selfpay", "Main Admitting", "Pre-Access", "Term-Pre-Access", "Same Day Surgery-6370"];
    let userData: Data[] = new Array<Data>();
    userData.push(new Data("IP on Account ($)", [0.00, 0.00, 0.00, 0.00, 0.00, 7508.56, 0.00, 1778.00, 0.00, 5825.83, 0.00, 0.00, 0.00, 12184.34, 555.86, 8610.72, 14129.71, 83.00, 0.00, 0.00, 0.00, 100.00, 0.00, 292.57, 0.00, 509.92, 0.00, 0.00, 910.23, 0.00, 1243.00, 0.00, 0.00, 0.00, 0.00, 185.50, 0.00], "#000080", "groupA"));
    userData.push(new Data("IP on App ($)", [0.00, 0.00, 0.00, 0.00, 77.29, 147.35, 0.00, 0.00, 0.00, 75.00, 0.00, 0.00, 0.00, 0.00, 0.00, 314.78, 866.56, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 589.15, 485.12, 125.58, 0.00, 602.71, 176.92, 0.00, 0.00, 0.00, 0.00, 0.00, 69.00, 287.98], "#4169E1", "groupA"));
    userData.push(new Data("APP Secured ($)", [-172.50, 0.00, -84.76, -96.19, -1044.07, 69.14, 0.00, 22071.67, 0.00, 2579.64, 0.00, 245.43, 0.00, 1053.22, 221.13, 1222.29, 3032.30, 0.00, 0.00, -112.42, 0.00, -410.00, 0.00, -706.14, -1236.63, -485.12, -5919.58, -12.33, 3717.23, -1254.44, -4363.93, 0.00, 0.00, 0.00, -63.72, 3300.61, -8305.70], "#B22222", "groupA"));
    userData.push(new Data("Executed App ($)", [627.65, 46.59, 0.00, 0.00, 591.89, 1339.91, 673.56, 2725.87, 470.05, 2621.21, 730.69, 0.00, 50.00, 2393.74, 1314.94, 3893.97, 3698.21, 29.19, 56.85, 128.88, 187.36, 19.66, 0.00, 40.00, 367.71, 838.30, 1477.75, 433.05, 1464.78, 1707.10, 1627.83, 50.00, 78.00, 56.65, 150.00, 417.77, 4065.23], "#87CEFA", "groupA"));
    userData.push(new Data("IP on Account ($) [MPR]", [0.00, 0.00, 0.00, 0.00, 0.00, 7508.56, 0.00, 1778.00, 0.00, 5825.83, 0.00, 0.00, 0.00, 12184.34, 555.86, 8610.72, 14129.71, 83.00, 0.00, 0.00, 0.00, 100.00, 0.00, 292.57, 0.00, 509.92, 0.00, 0.00, 910.23, 0.00, 1243.00, 0.00, 0.00, 0.00, 0.00, 185.50, 0.00], "#008B8B", "groupB"));
    userData.push(new Data("IP on App ($) [MPR]", [0.00, 0.00, 0.00, 0.00, 77.29, 147.35, 0.00, 0.00, 0.00, 75.00, 0.00, 0.00, 0.00, 0.00, 0.00, 314.78, 866.56, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 589.15, 485.12, 125.58, 0.00, 602.71, 176.92, 0.00, 0.00, 0.00, 0.00, 0.00, 69.00, 287.98], "#40E0D0", "groupB"));
    userData.push(new Data("APP Secured ($) [MPR]", [-172.50, 0.00, -84.76, -96.19, -1044.07, 69.14, 0.00, 22071.67, 0.00, 2579.64, 0.00, 245.43, 0.00, 1053.22, 221.13, 1222.29, 3032.30, 0.00, 0.00, -112.42, 0.00, -410.00, 0.00, -706.14, -1236.63, -485.12, -5919.58, -12.33, 3717.23, -1254.44, -4363.93, 0.00, 0.00, 0.00, -63.72, 3300.61, -8305.70], "#FA8072", "groupB"));
    userData.push(new Data("Executed App ($) [MPR]", [627.65, 46.59, 0.00, 0.00, 591.89, 1339.91, 673.56, 2725.87, 470.05, 2621.21, 730.69, 0.00, 50.00, 2393.74, 1314.94, 3893.97, 3698.21, 29.19, 56.85, 128.88, 187.36, 19.66, 0.00, 40.00, 367.71, 838.30, 1477.75, 433.05, 1464.78, 1707.10, 1627.83, 50.00, 78.00, 56.65, 150.00, 417.77, 4065.23], "#7FFFD4", "groupB"));
    let depDataChart1: Data[] = new Array<Data>();
    let depDataChart2: Data[] = new Array<Data>();
    let depDataChart3: Data[] = new Array<Data>();
    let depDataChart4: Data[] = new Array<Data>();
    depDataChart1.push(new Data("IP on Account", [0, 0, 0, 0, 15112.39, 0, 35480.63, 985.49, 910.23, 0, 1243], "blue", ""));
    depDataChart1.push(new Data("IP on Account [MPR]", [0, 0, 0, 0, 15112.39, 0, 35480.63, 985.49, 910.23, 0, 1243], "blue", ""));
    depDataChart2.push(new Data("IP on App", [0, 0, 0, 0, 299.64, 0, 1181.34, 1074.27, 905.21, 0, 0], "blue", ""));
    depDataChart2.push(new Data("IP on App [MPR]", [0, 0, 0, 0, 299.64, 0, 1181.34, 1074.27, 905.21, 0, 0], "blue", ""));
    depDataChart3.push(new Data("APP Secured", [-172.5, 0, -180.95, 0, 23676.38, 0, 5774.37, -2950.31, -3456.79, -12.33, -4363.93], "blue", ""));
    depDataChart3.push(new Data("APP Secured [MPR]", [-172.5, 0, -180.95, 0, 23676.38, 0, 5774.37, -2950.31, -3456.79, -12.33, -4363.93], "blue", ""));
    depDataChart4.push(new Data("Executed App", [627.65, 46.59, 0, 1874.3, 7278.88, 50, 11300.86, 1667.95, 4649.63, 433.05, 1627.83], "blue", ""));
    depDataChart4.push(new Data("Executed App [MPR]", [627.65, 46.59, 0, 1874.3, 7278.88, 50, 11300.86, 1667.95, 4649.63, 433.05, 1627.83], "blue", ""));
    let seperateChartLabel = new Set<string>;
    seperateChartLabel.add("APP Secured ($) [MPR]");
    seperateChartLabel.add("APP Secured ($)");
    this.chartData = {
      title: "Users / MPR Users",
      subTitle: "Names",
      names: names,
      data: userData,
      seperateChartLabel: seperateChartLabel
    }
    this.depDataChart1 = {
      title: "IP On Account",
      subTitle: "Departments",
      names: departments,
      data: depDataChart1,
      seperateChartLabel: seperateChartLabel
    }
    this.depDataChart2 = {
      title: "IP On APP",
      subTitle: "Departments",
      names: departments,
      data: depDataChart2,
      seperateChartLabel: seperateChartLabel
    }
    this.depDataChart3 = {
      title: "Secured APP",
      subTitle: "Departments",
      names: departments,
      data: depDataChart3,
      seperateChartLabel: seperateChartLabel
    }
    this.depDataChart4 = {
      title: "Executed APP",
      subTitle: "Departments",
      names: departments,
      data: depDataChart4,
      seperateChartLabel: seperateChartLabel
    }
  }


}
