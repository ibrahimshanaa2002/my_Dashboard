import { Component } from '@angular/core';
import {UserData} from "./model/userData.interface";
import {barChartAxisData} from "./model/barChartAxisData.interface";
import {Data} from "./model/data.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprinters';
  userData: UserData;
  MPRUserData: UserData;

  constructor() {
    let names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "17", "18"];
    let data = new Array<Data>();
    let arr = new Array<number>();
    arr= [1,2,3,4,5,6,7,8,9,10,11,2,13,14,15,16,17,18];
    data.push(new Data("ip on account", [1,2,3,4,5,6,7,8,9,10,11,2,13,14,15,16,17,18]));
    data.push(new Data("ip on App", [100,102,103,104,105,106,107,108,109,110,111,122,113,114,115,116,117,118]));
    data.push(new Data("ip on Secured", [200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217]));
    data.push(new Data("ip on rifle", [300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317]));
    this.userData = {
      title: "Users Data Chart",
      names: names,
      data: data
    }
    this.MPRUserData = {
      title: "Users Data Chart",
      names: names,
      data: data.slice(0,2)
    }
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
