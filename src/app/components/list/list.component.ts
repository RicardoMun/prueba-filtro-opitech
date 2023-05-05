import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  // Array of users for the list
  @Input() users: Array<User> = [];

  constructor() { }

  ngOnInit(): void {

  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Landed':
        return 'status-landed';
      case 'Operating':
        return 'status-operating';
      case 'Delayed':
        return 'status-delayed';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  }


}
