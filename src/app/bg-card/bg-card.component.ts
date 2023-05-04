import {Component, Input} from '@angular/core';
import {DataSet} from "../model/dataSet.interface";
import {UserData} from "../model/userData.interface";

@Component({
  selector: 'app-bg-card',
  templateUrl: './bg-card.component.html',
  styleUrls: ['./bg-card.component.css']
})
export class BgCardComponent {
  @Input() userData: Array<UserData>;
  @Input() MPRUserData: Array<UserData>;

}
