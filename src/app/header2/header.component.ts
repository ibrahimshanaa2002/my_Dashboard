import { Component } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  companyname= "VestaCare";
  userprofile= "../assets/img/user.png";
  username= "Ibrahim Shanaa";
  usercareer= "WebDeveloper";
  
  constructor(private sharedService: SharedService) { }
  ngOnInit() {
    const firstOption = (document.querySelector('select') as HTMLSelectElement).value;
    this.sharedService.setSelectedOption(firstOption);
  }
  onOptionChange(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    this.sharedService.setSelectedOption(selectedOption);
    console.log("set:",selectedOption);
  }
}
