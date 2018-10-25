import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private fileText;
  private data;
  title = 'jsontochart';

  fileUpload(event) {
    var reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);

    var me = this;

    reader.onload = function () {
      me.data = JSON.parse(reader.result);
      console.log(me.data);
      me.fileText = reader.result;
    }
  }
}
