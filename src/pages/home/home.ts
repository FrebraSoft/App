import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    @ViewChild('profitCanvas') profitCanvas;
    @ViewChild('evasionCanvas') evasionCanvas;
    @ViewChild('icmsCanvas') icmsCanvas;
    
    constructor(public navCtrl: NavController) {
 
    }
 
    ionViewDidLoad() {

      Chart.defaults.global.legend.position = 'bottom'
      Chart.defaults.global.legend.display = false;
      Chart.defaults.global.tooltips.enabled = false;
      Chart.defaults.scale.gridLines.display = false;
      Chart.defaults.scale.display = false;
      Chart.defaults.responsive = true;
      
      this.profitCanvas = new Chart(this.profitCanvas.nativeElement, {
        type: 'line',
        data: {
            labels: ["Jan","Fev","Mar"],
            datasets: [
                {
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "transparent",
                    borderColor: "#3fab6a",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBackgroundColor: "#3fab6a",
                    data: [65,39,120],
                    spanGaps: false,
                }
            ]
        }
      });

      this.evasionCanvas = new Chart(this.evasionCanvas.nativeElement, {
        type: 'line',
        data: {
            labels: ["Jan","Fev","Mar"],
            datasets: [
                {
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "transparent",
                  borderColor: "red",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBackgroundColor: "red",
                  data: [90,69,10],
                  spanGaps: false,
              }
            ]
        }
      });

      this.icmsCanvas = new Chart(this.icmsCanvas.nativeElement, {
        type: 'line',
        data: {
            labels: ["Jan","Fev","Mar"],
            datasets: [
                {
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "transparent",
                  borderColor: "#3fab6a",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBackgroundColor: "#3fab6a",
                  data: [30,69,12],
                  spanGaps: false,
              }
            ]
        }
      });

    }
}