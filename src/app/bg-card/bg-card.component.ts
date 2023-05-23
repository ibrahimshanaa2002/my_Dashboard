import {Component, Input} from '@angular/core';
import {ChartData} from "../model/ChartData.interface";
import {ExportExcel} from "../shared-utility/ExportExcel";

@Component({
  selector: 'app-bg-card',
  templateUrl: './bg-card.component.html',
  styleUrls: ['./bg-card.component.css']
})
export class BgCardComponent {
  @Input() chartData: ChartData;
  show: boolean = false;
  table: any;

  showDataIcon(){
    this.show = !this.show
  }

  x= [{
    userId: 25,
  id: 25,
  title: 35,
  body: [24,25,26,54]
  }];
  exportFile(){
    new ExportExcel(this.table);
  }
}
