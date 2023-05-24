import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {ChartData} from "../model/ChartData.interface";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
  export class TableComponent implements AfterViewChecked{
  @Input() chartData: ChartData;
  @Input() ID: string;
  @Output() table = new EventEmitter<any>();
  tbl: any;

  ngAfterViewChecked(): void {
    this.tbl = document.getElementById(this.ID);
    this.table.emit(this.tbl);
  }

}
