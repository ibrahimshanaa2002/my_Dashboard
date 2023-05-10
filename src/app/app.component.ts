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
    let data = new Map<string, Data[]>();
    let x : Data[] = new Array<Data>();
    x.push(new Data("iponaccount", 25));
    x.push(new Data("iponapp", 25));
    x.push(new Data("appsecured", 25));
    x.push(new Data("appexecuted", 25));
    let y : Data[] = new Array<Data>();
    y.push(new Data("iponaccount", 20));
    y.push(new Data("iponapp", 20));
    y.push(new Data("appsecured", 20));
    y.push(new Data("appexecuted", 20));
    data.set("ahmad",x);
    data.set("sami",y);
    data.set("dgfdg",y);
    data.set("hfgfg",y);
    data.set("sasdfsmi",y);
    data.set("sasmi",y);
    data.set("thtjh",y);
    data.set("sgsgfg",y);
    data.set("asdcvc",y);
    data.set("hjhkjk",y);
    data.set("rtrtj",y);
    data.set("scscs",y);
    data.set("bnbnbn",y);
    data.set("dsdsfsd",y);
    this.userData = {data}

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
