import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  isActive: boolean;
  ngOnInit(): void {
      this.toggleMenu();
  }
  menuState:string = 'out';
  state: boolean = false;



  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.state = !this.state;
  }
  menuItems = [
    { label: 'Dashboard', icon: 'fas fa-chart-line', href: '/dashboard' },
    { label: 'Dashboard', icon: 'fas fa-chart-pie', href: '/shortcuts' },
    { label: 'Dashboard', icon: 'fas fa-coins	', href: '/overview' }
  ];
  activeItemIndex: number = -1;

  toggleButtonActiveState(index: number) {
    this.activeItemIndex = index === this.activeItemIndex ? -1 : index;
  }

}
