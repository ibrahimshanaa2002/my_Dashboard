import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {faGauge, faHome} from "@fortawesome/free-solid-svg-icons";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(-69%,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 100%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent{

  @Output('toggle') eventEmitter = new EventEmitter<string>();
  menuState:string = 'out';

  gauge = faGauge;
  faHome = faHome;

  // toggleMenu(){
  //   this.eventEmitter.emit(true);
  // }

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    // @ts-ignore
    document.getElementById('sidebar').style.position = 'fixed';
    this.eventEmitter.emit(this.menuState);
  }

}
