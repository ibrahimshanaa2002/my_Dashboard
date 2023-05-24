import {Component, Input, OnInit} from '@angular/core';
import {ChartData} from "../model/ChartData.interface";
import {PrepareCardData} from "./PrepareCardData";
import {ExportExcel} from "../shared-utility/ExportExcel";


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit{
  @Input() chartData: ChartData;
  @Input() depDataChart1: ChartData;
  @Input() depDataChart2: ChartData;
  @Input() depDataChart3: ChartData;
  @Input() depDataChart4: ChartData;
  prepareCardData: PrepareCardData;
  tableData: ChartData;
  show: boolean = false;
  table: any;
  ID: string = 'tbl2';
  constructor() {
  }
  ngOnInit(): void {
    this.prepareCardData = new PrepareCardData();
    this.prepareCardData.prepareMdCardInfo(this.depDataChart1);
    this.prepareCardData.prepareMdCardInfo(this.depDataChart2);
    this.prepareCardData.prepareMdCardInfo(this.depDataChart3);
    this.prepareCardData.prepareMdCardInfo(this.depDataChart4);
    this.tableData = this.prepareCardData.prepareTableData();
  }

  showDataIcon(){
    this.show = !this.show
  }

  exportFile(){
    new ExportExcel(this.table, this.chartData.title);
  }
}
