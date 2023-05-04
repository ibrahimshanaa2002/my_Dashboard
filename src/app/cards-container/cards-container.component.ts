import {Component, Input} from '@angular/core';
import {UserData} from "../model/userData.interface";

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent {

  chartID1: string = "dough-chart1";
  chartID2: string = "dough-chart2";
  @Input() userData: Array<UserData>;
  @Input() MPRUserData: Array<UserData>;
  constructor() {
  }
}
