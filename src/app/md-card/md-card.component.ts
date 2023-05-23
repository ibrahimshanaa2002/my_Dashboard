import {Component, Input} from '@angular/core';
import {ChartData} from "../model/ChartData.interface";
import {ExportExcel} from "../shared-utility/ExportExcel";

@Component({
  selector: 'app-md-card',
  templateUrl: './md-card.component.html',
  styleUrls: ['./md-card.component.css']
})
export class MdCardComponent {
  @Input() depDataChart: ChartData;
  show: boolean = false;
  table: any;

  showDataIcon(){
    this.show = !this.show
  }

  exportFile(){
    new ExportExcel(this.table);
  }


}
