import { Component } from '@angular/core';

interface info {
  icon: string;
  title: string;
  padge: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  title: string = 'test';

  information: info[] = [
    { icon: 'fa-regular fa-circle-down', title: 'Downloads', padge: 3 },
    { icon: 'fa-solid fa-box-open', title: 'Orders', padge: 5 },
    { icon: 'fa-regular fa-heart', title: 'Wishlist', padge: 10 },
    { icon: 'fa-solid fa-hand-holding-heart', title: 'Gift Box', padge: 7 },
  ];
}
