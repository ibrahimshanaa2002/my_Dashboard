import {ChartData} from "../model/ChartData.interface";
import {DoughnutInfo} from "../model/doughnutInfo.interface";

export class PrepareCardData {
  depDataArr: ChartData[] = new Array<ChartData>();
  chartsInfo: Array<DoughnutInfo[]> = new Array<DoughnutInfo[]>();

  prepareMdCardInfo(category: ChartData){
    this.depDataArr.push(category);
    let chartInfo = new Array<DoughnutInfo>();
    let numOfLabels = 0;
    category.data.forEach(elem =>{
      if(numOfLabels == 2)
        return;
      let total: number = 0;
      let counter: number = 0;
      let max: number = 0;
      let index: number = 0;
      let average;
      elem.value.forEach(value => {
        total+= value;
        counter++;
        if (value > max){
          max = value;
          index = counter;
        }
      });
      average = parseFloat((total/counter).toFixed(2));
      chartInfo.push(new DoughnutInfo(elem.label, total,average , category.names.at(index)!));
      numOfLabels++;
    });
    this.chartsInfo.push(chartInfo);
  };

  prepareTableData(){

  }

}
