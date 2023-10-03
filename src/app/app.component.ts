import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstProject';
  path = 'https://picsum.photos/200/300';
  f() {
    alert('emriiiii9el');
  }
  list = [1, 2, 3];
}
