import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Chart, ChartMeta, elements} from "chart.js";
import {patientSkipped} from "../model/patients-skipped";


@Component({
  selector: 'app-goal-overview',
  templateUrl: './goal-overview.component.html',
  styleUrls: ['./goal-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GoalOverviewComponent{
  patientSkippedsList= patientSkipped[0];

  Encounters_Balance_skipped_Other= this.patientSkippedsList.Patient_section[5].value;
  Encounters_Balance_skipped_Bad_Debt= this.patientSkippedsList.Patient_section[6].value;

  patientSkippedTitle() {
    var element: any[] = [] ;
    for (let i = 0; i < this.patientSkippedsList.Patient_section.length-2; i++) {
      element.push( this.patientSkippedsList.Patient_section[i].title);
      var title= this.patientSkippedsList.Patient_section[i].title;
      // var title= this.patientSkippedsList.Patient_section[i].title.split(' ');
      element.push(title);
    }
    // console.log(element);
    return element;
  }
  patientSkippedValue() {
    var element: number[] = [] ;
    for (let i = 0; i < this.patientSkippedsList.Patient_section.length-2; i++) {
      element.push(this.patientSkippedsList.Patient_section[i].value);
    }
    // console.log(element);
    return element;
  }
  public chart: any;
  protected chart_ID: string = 'DoughChart_EncountersBalanceSkipped';
  
  createChart(){
    this.chart = new Chart(this.chart_ID, {
      type: 'doughnut',
      data: {
        labels: this.patientSkippedTitle(),
        datasets: [
          {
            data: this.patientSkippedValue(),
            backgroundColor: [
              'limegreen',
              'lightgreen',
              'lightgrey',
              '#5d8aa8',
              '#9966cc',
              '#e9d66b',
              '#318ce7',
              '#0095b6'
            ],
            // hoverBackgroundColor: ['darkgreen', 'green', 'darkgrey'],
            borderWidth: 0,
          }
        ]
      },
      options: {
        cutout: 45,
        aspectRatio:1,
        responsive: true,
        layout: {autoPadding: true},
        plugins: {
          legend:{
            display: false
          },
          tooltip: {
            enabled: false,
            external: function(context){
              const {chart, tooltip} = context;
              let tooltipEl = chart.canvas.parentNode?.querySelector('div');
              if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.classList.add('customeTooltip');
                chart.canvas.parentNode?.appendChild(tooltipEl);
                console.log(tooltip.body);
              }
              // Hide if no tooltip
              if (tooltip.opacity === 0) {
                tooltipEl.style.opacity = '0';
                return;
              }
              // Set Text
              if (tooltip.body) {
                const titleLines = tooltip.title || [];
                const bodyLines = tooltip.body.map(b => b.lines);
                let tooltipP= document.createElement('p'); //title
                let tooltipSpan= document.createElement('span'); //body
                tooltipEl.appendChild(tooltipP);
                tooltipEl.appendChild(tooltipSpan); 

                titleLines.forEach(title => {
                  const text = document.createTextNode(title);
                  tooltipP.appendChild(text); 
                });
                bodyLines.forEach((body, i) => {
                  const text = document.createTextNode(body[i]);
                  tooltipSpan.appendChild(text);
                });
                // Remove old children
                while (tooltipEl?.firstChild && tooltipEl?.lastChild) {
                  tooltipEl?.firstChild.remove();
                  tooltipEl?.lastChild.remove();
                }
                // Add new children
                tooltipEl?.appendChild(tooltipP);
                tooltipEl?.appendChild(tooltipSpan);
                // console.log(tooltipEl);  
              }

              const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;

              // Display, position, and set styles for font
              tooltipEl.style.opacity = '1';
              tooltipEl.style.left = positionX + tooltip.caretX + 'px';
              tooltipEl.style.top = positionY + tooltip.caretY + 'px';

              // console.log("positionX: "+positionX+" - "+"positionY: "+positionY+ " - "+"tooltip.caretX: "+tooltip.caretX+ " - "+"tooltip.caretY: "+tooltip.caretY);
            },
            displayColors: false,
          }
        },

      },
      // plugins: [this.doughnutText]
    });

  }
  ngOnInit(): void {
    this.createChart();
  } 
}




