import * as XLSX from 'xlsx';
import {Data} from "../model/data.interface";
export class ExportExcel{

  private JsonDataObject: any;

  constructor(JsonDataObject: any) {
    this.JsonDataObject = JsonDataObject;
    this.exportExcel();
  }

  private exportExcel(): void {
    // const fileToExport = this.JsonDataObject.map((item:any) => {
    //   return {
    //     "Names": item,
    //     "IP on Account $": item,
    //     "Title": item,
    //     "Body": item
    //   }
    // });

    this.exportToExcel(
      this.JsonDataObject,
      'yourExcelFile-' + new Date().getTime() + '.xlsx'
    );
  }

  private exportToExcel (element: any, fileName: string): void {
    // generate workbook and add the worksheet
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    // save to file
    XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
    XLSX.writeFileXLSX(workbook, fileName);
  }
}
