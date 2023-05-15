import {Component, Input} from '@angular/core';
import {UserData} from "../model/userData.interface";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-md-card',
  templateUrl: './md-card.component.html',
  styleUrls: ['./md-card.component.css']
})
export class MdCardComponent {
  @Input() depUserData: UserData;
  faEllipsisH = faEllipsisH;

  constructor() {
  }


}
