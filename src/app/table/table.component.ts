import {Component, Input, OnInit} from '@angular/core';
import {Company} from "../model/TableModel";
import {UserData} from "../model/userData.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
  export class TableComponent implements OnInit {
  @Input() userData: UserData[];

    companies: Company[] = [
      {
        name: 'Company A',
        email: 'company@email.com',
        category: 'Tech',
        views: '5.2K',
        revenue: '800$',
        status: 'Done',
        sales: '50 %',
        ViewsTime: 'in 24 hours',
        salesImagePath: 'path/to/image'
      },
      {
        name: 'Company B',
        email: 'company@email.com',
        category: 'Retail',
        views: '2.3K',
        revenue: '500$',
        status: 'In Progress',
        sales: '30 %',
        ViewsTime: 'in 24 hours',
        salesImagePath: 'path/to/image'
      },
      {
        name: 'Company C',
        email: 'company@email.com',
        category: 'Finance',
        views: '10.2K',
        revenue: '1200$',
        status: 'Done',
        sales: '60 %',
        ViewsTime: 'in 24 hours',
        salesImagePath: 'path/to/image'
      }
    ];
salesImage: any;

    constructor() { }

    ngOnInit() {
    }
}
