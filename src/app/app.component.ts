import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
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
        type: me.data.meta.type,
        data: me.data.data,
        options: me.data.options
      });
    }
  }
}
