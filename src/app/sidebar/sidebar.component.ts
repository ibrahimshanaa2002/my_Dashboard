import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { animate, state, style, transition, trigger } from "@angular/animations";

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
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    this.toggleMenu();
  }
  menuState: string = 'out';



  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  menuItems = [
    { label: 'Dashboard', icon: 'fas fa-chart-line', href: '/dashboard' },
    { label: 'Dashboard', icon: 'fas fa-chart-pie', href: '/shortcuts' },
    { label: 'Dashboard', icon: 'fas fa-coins	', href: '/overview' }
  ];

  activeItemIndex = 0;
  menuItemClicked = false;

  toggleButtonActiveState(index: number) {
    if (this.activeItemIndex === index) {
      if (!this.menuItemClicked) {
        this.menuItemClicked = true;
      }
    } else {
      this.menuItemClicked = false;
    }
    this.activeItemIndex = index;
  }
}
