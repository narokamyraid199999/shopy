import { Component } from '@angular/core';

interface item {
  id: string;
  title: string;
  status: string;
  view: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  product: item[] = [
    {
      id: '#2245',
      title: 'How can i share ?',
      status: 'Pending',
      view: 'Invoice',
    },
    {
      id: '#2220',
      title: 'Send money, but not working',
      status: 'Need your replay',
      view: 'Reply',
    },
    {
      id: '#2125',
      title: 'Balance error',
      status: 'Resolved',
      view: 'Invoice',
    },
    {
      id: '#2124',
      title: 'How to decline bid',
      status: 'On Hold',
      view: 'Status',
    },
  ];
}
