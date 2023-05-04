import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Array of users for the list
  @Input() users: Array<User> = [];

  getStatusClass(status: string): string {
    switch (status) {
      case 'landed':
        return 'status-landed';
      case 'operating':
        return 'status-operating';
      case 'delayed':
        return 'status-delayed';
      case 'cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }

  constructor() { }

}
