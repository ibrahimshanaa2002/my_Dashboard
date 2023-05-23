import { Component } from '@angular/core';
import { Header } from '../model/HeaderModel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Header: Header =
    {
      companyname: 'VestaCare',
      userprofile: '../assets/img/user.png',
      username: 'Ibrahim Shanaa',
      usercareer: 'WebDeveloper',
    }
  ;
}
