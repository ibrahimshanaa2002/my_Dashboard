import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprinters';

  changeWidth(state: string){
    // if (state == "in"){
      // @ts-ignore
      // document.getElementById('cont').style.marginLeft = "10px";
    // }
    // else {
      // @ts-ignore
      // document.getElementById('cont').style.marginLeft = "10px";
    // }

  }
}
