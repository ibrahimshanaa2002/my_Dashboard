import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-md-card',
  templateUrl: './md-card.component.html',
  styleUrls: ['./md-card.component.css']
})
export class MdCardComponent {

  @Input() ID: string;

  constructor() {
  }
}
