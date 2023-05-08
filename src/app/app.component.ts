import { Component } from '@angular/core';
import {UserData} from "./model/userData.interface";
import {barChartAxisData} from "./model/barChartAxisData.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprinters';
  userData: UserData ;
  MPRUserData: Array<UserData>;

  constructor() {
    let xy = new Array<barChartAxisData>;
    let data = new Map<string, barChartAxisData[]>;
    xy.push(new barChartAxisData("x1", 20));
    xy.push(new barChartAxisData("x2", 20));
    xy.push(new barChartAxisData("x3", 20));
    xy.push(new barChartAxisData("x4", 20));
    xy.push(new barChartAxisData("x5", 20));
    xy.push(new barChartAxisData("x6", 20));
    xy.push(new barChartAxisData("x7", 20));
    xy.push(new barChartAxisData("x8", 20));
    xy.push(new barChartAxisData("x9", 20));
    xy.push(new barChartAxisData("x10", 20));
    // xy.push(new barChartAxisData("x11", 20));


    let xyz = new Array<barChartAxisData>;
    xyz.push(new barChartAxisData("x1", 20));
    xyz.push(new barChartAxisData("x2", 20));
    xyz.push(new barChartAxisData("x3", 20));
    xyz.push(new barChartAxisData("x4", 20));
    xyz.push(new barChartAxisData("x5", 20));


    xyz.push(new barChartAxisData("x6", 20));
    xyz.push(new barChartAxisData("x7", 20));
    xyz.push(new barChartAxisData("x8", 20));
    xyz.push(new barChartAxisData("x9", 20));
    xyz.push(new barChartAxisData("x10", 20));
    xyz.push(new barChartAxisData("x11", 20));
    data.set("xy", xy);
    data.set("xyz", xyz);
    this.userData = {
      data: data
    };
  }

  changeWidth(state: boolean){
    if (state == true){
       const x = document.getElementById('sidebar') as HTMLElement;
       x.style.width = "100px";
    }
    else {
      const x = document.getElementById('sidebar') as HTMLElement;
      x.style.width = "290px";
    }
  }
}
