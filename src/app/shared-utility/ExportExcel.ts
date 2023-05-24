import * as XLSX from 'xlsx';
export class ExportExcel{

  private dataObject: any;
  private fileName: string;

  constructor(dataObject: any, fileName: string) {
    this.dataObject = dataObject;
    this.fileName = fileName;
    this.exportExcel();
  }

  private exportExcel(): void {
    this.exportToExcel(
      this.dataObject,
      this.fileName + "  -  " + new Date().toDateString() + '.xlsx'
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
