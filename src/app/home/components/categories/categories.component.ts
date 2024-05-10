import { Component } from '@angular/core';

interface item {
  img: string;
  title: string;
  numberOfItem: number;
  link: string;
}

interface mission {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  products: item[] = [
    {
      img: 'assets\\categories\\headphone.png',
      title: 'Headphones',
      numberOfItem: 3,
      link: 'headphones',
    },
    {
      img: 'assets\\categories\\phone.png',
      title: 'Mobile Tablets',
      numberOfItem: 3,
      link: 'Mobile',
    },
    {
      img: 'assets\\categories\\cpu.png',
      title: 'CPU Heat Pipes',
      numberOfItem: 2,
      link: 'cpu',
    },
    {
      img: 'assets\\categories\\watche.png',
      title: 'Smart Watch',
      numberOfItem: 3,
      link: 'watches',
    },
    {
      img: 'assets\\categories\\bluetoothe.png',
      title: 'Bluetooth',
      numberOfItem: 2,
      link: 'bluetooth',
    },
  ];

  missions: mission[] = [
    {
      icon: 'fa-solid fa-truck',
      title: 'Free Delivery',
      desc: 'Orders from all item',
    },
    {
      icon: 'fa-solid fa-dollar-sign',
      title: 'Return & Refund',
      desc: 'Money back guarantee',
    },
    {
      icon: 'fa-solid fa-tag',
      title: 'Member Discount',
      desc: 'Onevery order over $140.00',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Support 24/7',
      desc: 'Contact us 24 hours a day',
    },
  ];
}
