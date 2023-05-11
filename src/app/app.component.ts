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
  MPRUserData: Array<UserData>;

  constructor() {
    let names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "17", "18"];
    let data = new Array<Data>();
    let arr = new Array<number>();
    arr= [1,2,3,4,5,6,7,8,9,10,11,2,13,14,15,16,17,18];
    data.push(new Data("ip on account", arr));
    data.push(new Data("ip on App", arr));
    data.push(new Data("ip on Secured", arr));
    data.push(new Data("ip on rifle", arr));
    this.userData = {
      title: "Users Data Chart",
      names: names,
      data: data
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
