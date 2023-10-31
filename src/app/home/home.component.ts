import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'FirstProject';
  path = 'https://picsum.photos/200/300';
  f() {
    alert('emriiiii9el');
  }
  list = [1, 2, 3];
}
