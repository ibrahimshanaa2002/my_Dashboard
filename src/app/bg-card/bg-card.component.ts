import {Component, Input} from '@angular/core';
import {ChartData} from "../model/ChartData.interface";
import {ExportExcel} from "../shared-utility/ExportExcel";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-bg-card',
  templateUrl: './bg-card.component.html',
  styleUrls: ['./bg-card.component.css']
})
export class BgCardComponent {
  @Input() chartData: ChartData;
  show: boolean = false;
  table: any;
  ID: string = 'tbl1';

  showDataIcon(){
    this.show = !this.show
  }

  exportFile(){
    new ExportExcel(this.table, this.chartData.title);
  }
}
