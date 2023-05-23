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
  export class TableComponent implements OnInit, AfterContentInit{
  @Input() chartData: ChartData;
  @Output() table = new EventEmitter<any>();
  tbl: any;
  constructor() {

  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  ngAfterContentInit(): void {
    this.tbl = document.getElementById('tbl');
    this.table.emit(this.tbl);
  }

}
