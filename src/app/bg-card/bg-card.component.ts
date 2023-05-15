import {Component, Input} from '@angular/core';
import {UserData} from "../model/userData.interface";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-bg-card',
  templateUrl: './bg-card.component.html',
  styleUrls: ['./bg-card.component.css']
})
export class BgCardComponent {
  @Input() userData: UserData;
  faEllipsisH = faEllipsisH;

}
