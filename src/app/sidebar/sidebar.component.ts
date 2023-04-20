import { Component } from '@angular/core';
import {faGauge} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

gauge = faGauge;

}
