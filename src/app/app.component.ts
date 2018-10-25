import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];
  fileText;
  data;
  title = 'jsontochart';

  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);

    var me = this;

    reader.onload = function () {
      me.data = JSON.parse(reader.result);
      console.log(me.data);
      me.fileText = reader.result;
      me.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: me.data.groups[1].peaks[0].eic.rt,
          datasets: [
            {
              label: me.data.groups[1].peaks[0].sampleName,
              data: me.data.groups[1].peaks[0].eic.intensity,
              borderColor: '#008000',
              fill: true
            },
            {
              label: me.data.groups[1].peaks[1].sampleName,
              data: me.data.groups[1].peaks[1].eic.intensity,
              borderColor: '#800080',
              fill: true
            },
            {
              label: me.data.groups[1].peaks[2].sampleName,
              data: me.data.groups[1].peaks[2].eic.intensity,
              borderColor: '#FFD700',
              fill: true
            },

          ]
        },
        options: {
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'rt'
              }
            }],

            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'intensity'
              }
            }]
          }
        }
      });
    }
  }
}
