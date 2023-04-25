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
        transform: 'translate3d(-65%,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 100%)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent implements OnInit{
  ngOnInit(): void {
      this.toggleMenu();
  }

  @Output('toggle') eventEmitter = new EventEmitter<boolean>();
  menuState:string = 'out';
  state: boolean = false;

  gauge = faGauge;
  faHome = faHome;

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.state = !this.state;
    this.eventEmitter.emit(this.state);
  }

}
