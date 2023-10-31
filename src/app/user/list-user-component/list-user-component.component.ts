import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./list-user-component.component.css'],
})
export class ListUserComponentComponent {
  list!: User[];
  constructor(private userS: UserService) {}
  ngOnInit() {
    this.list = this.userS.list;
  }

  deleteUser(index: number) {
    this.list.splice(index, 1);
  }
}
